import { ObjectId } from "mongoose";

export interface PeriodInterface {
  name: String;
  description: String;
  projects: ObjectId[];
}