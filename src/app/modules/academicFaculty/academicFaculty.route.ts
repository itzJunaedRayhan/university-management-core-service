import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.get('/:id', AcademicFacultyController.getAcademicFacultyById);

router.post(
  '/',
  validateRequest(AcademicFacultyValidation.create),
  AcademicFacultyController.createAcademicFaculty
);

export const academicFacultyRoutes = router;
