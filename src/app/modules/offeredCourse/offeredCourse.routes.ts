import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OfferedCourseController } from './offeredCourse.controller';
import { OfferedCourseValidations } from './offeredCourse.validation';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.get('/', OfferedCourseController.getAllFromDB);
router.get('/:id', OfferedCourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(OfferedCourseValidations.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseValidations.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.deleteByIdFromDB
);

export const offeredCourseRoutes = router;
