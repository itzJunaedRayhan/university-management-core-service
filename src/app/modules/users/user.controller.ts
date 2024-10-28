import { Request, Response } from 'express';
import { UserServices } from './user.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body);
    res.send({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();
    res.send({
      success: true,
      message: 'Users retrived successfully',
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: 'User retrived successfully',
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
