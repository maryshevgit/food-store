import { IFood } from "../types/types";

export const calcTotalPrice = (items: IFood[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};