// @ts-nocheck
import * as React from "react";
import { CardStack } from "../styled-components/card-stack";
import { Price } from "./price";
import { Item } from "../../models/item";
import { selectedItem } from "../../atoms/selected-item";
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
          backgroundColor: {
            xs: "primary.main",
            md: selected?.id === item?.id ? "primary.dark" : "primary.main",
          },
          boxShadow: {
            xs: "unset",
            md:
              selected?.id === item?.id
                ? "inset 5px 5px 10px rgba(0, 0, 0, 0.4);"
                : 0,
          },
          marginInline: { xs: "5px", md: "unset" },
        }}
      >
        {children}
        <Price price={item.price} />
      </CardStack>
    </React.Fragment>
  );
};
