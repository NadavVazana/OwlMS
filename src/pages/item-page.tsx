import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { useRecoilState } from "recoil";
import { ItemCard } from "../components/item-card";
import { ItemPreview } from "../components/item-preview";
import { ItemTitle } from "../components/item-title";
import { selectedItem } from "../atoms/selected-item";
import { Item } from "../models/item";
import items from "../mocks/item-mock";

export const ItemPage = () => {
  const [item, setItem] = useRecoilState(selectedItem);

  const handleSelectItem = (item: Item) => {
    setItem(item);
  };

  return (
    <Box sx={{ bgcolor: "custom.background" }} height={"100vh"}>
      <Stack
        gap={"200px"}
        direction={"row"}
        sx={{
          bgcolor: "custom.background",
          paddingTop: "15px",
          paddingInline: "40px",
        }}
      >
        <Box
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"30px"}
        >
          {items.map((item) => {
            return (
              <ItemCard
                handleSelectedItem={handleSelectItem}
                key={item.id}
                item={item}
              >
                <ItemTitle title={item.item_name} />
              </ItemCard>
            );
          })}
        </Box>

        <Box width={"50%"}>
          <ItemPreview item={item} />
        </Box>
      </Stack>
    </Box>
  );
};
