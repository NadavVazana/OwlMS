import { atom } from "recoil";
import items from "../mocks/item-mock";

export const selectedItem = atom({ key: "selectedItem", default: items[0] });
