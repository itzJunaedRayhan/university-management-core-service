import { Request, Response } from 'express';
import { AcademicSemesterServices } from './academicSemester.services';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemester } from '@prisma/client';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.insertIntoDB(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester Created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, [
    'searchTerm',
    'code',
    'startMonth',
    'endMonth',
  ]);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await AcademicSemesterServices.getAllFromDB(filters, options);
  console.log('Filters:', filters, 'options:', options);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semesters retrieved successfully...',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.getDataById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester retrieved successfully...',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semster updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semster delete successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
};
