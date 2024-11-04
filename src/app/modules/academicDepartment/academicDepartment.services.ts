/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcademicDepartment, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  academicDepartmentRelationalFields,
  academicDepartmentRelationalFieldsMapper,
  academicDepartmentSearchableFields,
} from './academicDepartment.constants';
import { IAcademicDepartmentFilterRequest } from './academicDepartment.interface';

const createDepartment = async (
  data: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data,
    include: { academicFaculty: true },
  });
  return result;
};

const getAllDepartments = async (
  filters: IAcademicDepartmentFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicDepartment[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;
  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      OR: academicDepartmentSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map(key => {
        if (academicDepartmentRelationalFields.includes(key)) {
          return {
            [academicDepartmentRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
            /*
            academicFaculty : {
                id : value of academicFacultyId given on req.params
            }
            */
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereCondition: Prisma.AcademicDepartmentWhereInput =
    andCondition.length > 0 ? { AND: andCondition } : {};
  const result = await prisma.academicDepartment.findMany({
    include: {
      academicFaculty: true,
    },
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: 'desc' },
  });
  const total = await prisma.academicDepartment.count({
    where: whereCondition,
  });
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

//  Get a single department:
const getDepartmentById = async (
  id: string
): Promise<AcademicDepartment | null> => {
  const result = await prisma.academicDepartment.findUnique({
    where: {
      id,
    },
    include: {
      academicFaculty: true,
    },
  });
  return result;
};

export const AcademicDepartmentServices = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
};
