import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { offeredCourseClassScheduleFilterableFields } from './offeredCourseClassSchedule.constants';
import { OfferedCourseClassScheduleServices } from './offeredCourseClassSchedule.services';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleServices.insertIntoDB(
    req.body
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Offered Course Class Schedule Created!',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, offeredCourseClassScheduleFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await OfferedCourseClassScheduleServices.getAllFromDB(
    filters,
    options
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'OfferedCourse class schedule fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OfferedCourseClassScheduleServices.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'OfferedCourseClassSchedule fetched successfully',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OfferedCourseClassScheduleServices.updateOneInDB(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'OfferedCourseClassSchedule updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OfferedCourseClassScheduleServices.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'OfferedCourseClassSchedule deleted successfully',
    data: result,
  });
});

export const OfferedCourseClassScheduleController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
