import { Request, Response } from 'express';
import { AcademicSemesterServices } from './academicSemester.services';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemester } from '@prisma/client';
import catchAsync from '../../../shared/catchAsync';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.insertIntoDB(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester Created successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  insertIntoDB,
};
