import { Router } from "express";

import * as studentController from "../../controllers/student/";

const router = Router();
const BASE_URL = "/students";

router.get(BASE_URL, studentController.getAllStudents);
router.post(BASE_URL, studentController.addStudent);
router.delete(`${BASE_URL}/:id`, studentController.deleteStudentById);

export default router;
