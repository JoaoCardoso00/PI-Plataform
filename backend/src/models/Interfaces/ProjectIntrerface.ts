import { ObjectId } from "mongoose";

export interface ProjectInterface {
  _id?: ObjectId;
  period_id: ObjectId;
  image?: String;
  title: String;
  description: String;
  times_clicked: Number;
  github: String;
  video: String;
}