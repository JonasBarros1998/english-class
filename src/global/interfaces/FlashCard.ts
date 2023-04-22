import { List } from "./Card";
import { User } from "./User";

export interface FlashCard {
  id: string,
  date: string,
  user: User,
  lists: List[]
}