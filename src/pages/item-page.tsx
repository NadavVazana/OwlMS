import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { useRecoilState } from "recoil";
import { ItemCard } from "../components/item-card";
import { ItemPreview } from "../components/item-preview";
import { ItemTitle } from "../components/item-title";
import { selectedItem } from "../atoms/selected-item";
import { isItemModal } from "../atoms/is-item-modal";
import { Item } from "../models/item";
import items from "../mocks/item-mock";

export const ItemPage = () => {
  const [item, setItem] = useRecoilState(selectedItem);
  const [isModal, setModal] = useRecoilState(isItemModal);

  const handleSelectItem = (item: Item) => {
    setItem(item);
    setModal(true);
  };

  const handleCloseModal = () => {
    setItem(items[0]);
    setModal(false);
  };

  return (
    <Box sx={{ bgcolor: "custom.background" }} height={"89vh"}>
      <Stack
        direction={"row"}
        sx={{
          gap: { md: "80px", xl: "100px" },
          bgcolor: "custom.background",
          paddingBlock: "15px",
          paddingInline: { xs: "0px", md: "40px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            paddingTop: { xs: "15px", md: "5px" },
          }}
          display={"flex"}
          flexDirection={"column"}
          gap={"15px"}
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

        <Box
          sx={{
            transition: "opacity 0.3s",
            pointerEvents: { xs: isModal ? "all" : "none", md: "all" },
            opacity: { xs: isModal ? 1 : 0, md: 1 },
            position: { xs: "fixed", md: "static" },
          }}
        >
          <ItemPreview handleCloseModal={handleCloseModal} item={item} />
        </Box>
      </Stack>
    </Box>
  );
};
