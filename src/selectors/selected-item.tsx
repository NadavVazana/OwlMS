// @ts-nocheck
import { selector } from "recoil";
import { Item } from "../models/item";
import { selectedItem } from "../atoms/selected-item";
export const selectedItemSelector = selector({
  key: "selectedItemSelector",
  get: ({ get }) => {
    const item: Item = get(selectedItem);
    return item.id;
  },
});
