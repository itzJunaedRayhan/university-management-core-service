import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { roomFilterableFields } from './room.constants';
import { RoomServices } from './room.services';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomServices.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Room created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, roomFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await RoomServices.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Rooms fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await RoomServices.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Room fetched successfully',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await RoomServices.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Room updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await RoomServices.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Room deleted successfully',
    data: result,
  });
});

export const RoomController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
