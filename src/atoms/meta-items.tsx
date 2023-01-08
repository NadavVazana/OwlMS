import { atom } from "recoil";
import { number } from "yargs";

type MetaItem = {
  id: number;
  name: string;
};

export const metaItems = atom({ key: "metaItems", default: [] });
