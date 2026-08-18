import {User} from "./user";

export type Tweet = {
  id: number;
  user: User;
  body: string;
  image?: string;
  linkCount: number;
  commentCount: number;
  retweetCount: number;
  liked: boolean;
  retweeted: boolean;
  dataPost: Date;
}