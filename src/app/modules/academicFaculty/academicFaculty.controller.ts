import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicFacultyServices } from './academicFaculty.services';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyServices.createAcademicFaculty(
      req.body
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'AcademicFaculty created successfully',
      data: result,
    });
  }
);

const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, ['searchTerm', 'id']);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await AcademicFacultyServices.getAllAcademicFaculty(
      filters,
      options
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'AcademicFaculties fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getAcademicFacultyById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicFacultyServices.getAcademicFacultyById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'AcademicFaculty fetched successfully',
      data: result,
    });
  }
);

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicFacultyServices.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'AcademicFaculty updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicFacultyServices.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'AcademicFaculty delete successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getAcademicFacultyById,
  updateOneInDB,
  deleteByIdFromDB,
};
