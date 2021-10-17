import { ITag } from "./Tag";

export interface ITask {
  id: string;
  title: string;
  description: string;
  done: boolean;

  tag?: ITag;
}
