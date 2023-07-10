import { Category } from "@core/types/category";
import { State } from "@core/types/state";
import { User } from "@core/models/user";

export interface Article {
  id: number;
  image: string;
  title: string;
  description: string;
  datePublished: string;
  proposalsQuantity: number;
  category: Category;
  state: State;
  user: User;
  gallery: Array<string>;
}
