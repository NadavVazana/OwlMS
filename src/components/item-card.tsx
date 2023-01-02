// @ts-nocheck
import * as React from "react";
import { CardStack } from "./styled-components/card-stack";
import { Price } from "./price";
import { Item } from "../models/item";
import { selectedItem } from "../atoms/selected-item";
import { useRecoilValue } from "recoil";

type ItemCardProps = {
  children?: React.ReactNode;
  item: Item;
  handleSelectedItem: (item) => void;
};

export const ItemCard = ({
  children,
  item,
  handleSelectedItem,
}: ItemCardProps) => {
  const selected = useRecoilValue(selectedItem);

  return (
    <React.Fragment>
      <CardStack
        onClick={() => {
          handleSelectedItem(item);
        }}
        sx={{
          backgroundColor:
            selected.id === item.id ? "primary.dark" : "primary.main",
        }}
      >
        {children}
        <Price price={item.item_price} />
      </CardStack>
    </React.Fragment>
  );
};
