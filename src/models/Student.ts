import { model, Schema } from "mongoose";

export type StudentType = {
  firstname: string;
  lastname: string;
  class: string;
  age: number;
};

const studentSchema = new Schema<StudentType>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    class: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<StudentType>("Student", studentSchema);
