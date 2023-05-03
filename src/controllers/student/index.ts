import { Request, Response } from "express";

import * as studentService from "../../services/student/";

export async function addStudent(req: Request, res: Response) {
  try {
    await studentService.addStudent(req.body);
    res.status(201).json({ message: "Etudiant ajouté" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteStudentById(req: Request, res: Response) {
  try {
    await studentService.deleteStudentById(req.params.id);
    res.status(201).json({ message: "Etudiant effacé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllStudents(_: Request, res: Response) {
  try {
    const payload = await studentService.getAllStudents();
    res.status(200).json(payload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
