import { selector } from "recoil";
import { isVisible } from "../atoms/is-visible";

export const selectedItemSelector = selector({
  key: "selectedItemSelector",
  get: ({ get }) => {
    return get(isVisible);
  },
});
