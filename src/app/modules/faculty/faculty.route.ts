import express from 'express';
import { FacultyController } from './faculty.controller';
import validateRequest from '../../middleware/validateRequest';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);

router.get('/:id', FacultyController.getByIdFromDB);

router.post(
  '/',
  validateRequest(FacultyValidation.create),
  FacultyController.insertIntoDB
);

export const FacultyRoutes = router;
