import { ObjectId } from "mongoose";

export interface VoteInterface {
  project_id: ObjectId;
  email?: String;
}
