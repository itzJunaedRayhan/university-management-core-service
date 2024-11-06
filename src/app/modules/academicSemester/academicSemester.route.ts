import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middleware/validateRequest';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getDataById);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.deleteByIdFromDB
);
export const AcademicSemesterRoutes = router;
