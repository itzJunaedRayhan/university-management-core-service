import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { RoomValidation } from './room.validation';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { RoomController } from './room.controller';

const router = express.Router();

router.get('/', RoomController.getAllFromDB);
router.get('/:id', RoomController.getByIdFromDB);

router.post(
  '/',
  validateRequest(RoomValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(RoomValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.deleteByIdFromDB
);

export const RoomRoutes = router;
