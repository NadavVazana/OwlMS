// @ts-nocheck
import * as React from "react";
import { CardStack } from "./styled-components/card-stack.tsx";
import { Price } from "./price.tsx";

export const ItemCard: React.FC<{}> = (props) => {
  return (
    <section className="item-card">
      <CardStack sx={{ backgroundColor: "primary.main" }}>
        {props.children}
        <Price price="13,000,000" />
      </CardStack>
    </section>
  );
};
