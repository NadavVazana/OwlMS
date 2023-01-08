// @ts-nocheck
import { selector } from "recoil";
import { metaItems } from "../atoms/meta-items";
export const metaItemsSelector = selector({
  key: "metaItemsSelector",
  get: ({ get }) => {
    return metaItems;
  },
});
