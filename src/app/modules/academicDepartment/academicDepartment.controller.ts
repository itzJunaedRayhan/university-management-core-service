import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { AcademicDepartmentServices } from './academicDepartment.services';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentServices.createDepartment(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Department Created successfully',
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'id', 'academicFacultyId']);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await AcademicDepartmentServices.getAllDepartments(
    filters,
    options
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Departments retrived successfully',
    data: result,
  });
});

const getDepartmentById = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentServices.getDepartmentById(
    req.params.id
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Departments retrived successfully',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicDepartmentServices.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'AcademicDepartment updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicDepartmentServices.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'AcademicDepartment delete successfully',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateOneInDB,
  deleteByIdFromDB,
};
