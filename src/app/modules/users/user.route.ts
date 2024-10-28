import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { UserValidation } from './user.validate';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getSingleUser);

export const UserRoutes = router;
