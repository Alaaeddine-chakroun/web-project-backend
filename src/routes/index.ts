import studentRoutes from "./student";
import { Router } from "express";

const router = Router();

router.use(studentRoutes);

export default router;
