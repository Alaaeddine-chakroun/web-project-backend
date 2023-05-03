import Student, { StudentType } from "../../models/Student";

export async function addStudent(studentData: StudentType) {
  await Student.create(studentData);
}

export async function deleteStudentById(studentId: string) {
  const maybeStudent = await Student.findByIdAndDelete(studentId);
  if (!maybeStudent) throw new Error("Etudiant introuvable");
}

export async function getAllStudents() {
  return await Student.find();
}
