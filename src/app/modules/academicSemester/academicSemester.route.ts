import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post('/', validateRequest(AcademicSemesterValidation.create), AcademicSemesterController.insertIntoDB);

export const AcademicSemesterRoutes = router;