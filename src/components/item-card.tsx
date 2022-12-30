import * as React from "react";
import { CardStack } from "./styled-components/card-stack";
import { Price } from "./price";

type ItemCardProps = {
  children: React.ReactNode;
};

export const ItemCard = ({ children }: ItemCardProps) => {
  return (
    <section className="item-card">
      <CardStack sx={{ backgroundColor: "primary.main" }}>
        {children}
        <Price price={"13,000,000"} />
      </CardStack>
    </section>
  );
};
