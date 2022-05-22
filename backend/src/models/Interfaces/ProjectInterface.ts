import { ObjectId } from "mongoose";

export interface ProjectInterface {
  _id?: ObjectId;
  period_id: ObjectId;
  title: string;
  participants: string;
  description: string;
  times_clicked: number;
  github: string;
  video: string;
  total?: number;
  unique?: string[]
}