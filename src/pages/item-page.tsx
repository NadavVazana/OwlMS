// @ts-nocheck
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { useRecoilState } from "recoil";
import { ItemCard } from "../components/item-page/item-card";
import { ItemPreview } from "../components/item-page/preview/item-preview";
import { ItemTitle } from "../components/item-page/item-title";
import { selectedItem } from "../atoms/selected-item";
import { isItemModal } from "../atoms/is-item-modal";
import { Item } from "../models/item";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiClient } from "../api/api-client";
import { utils } from "../utils/utils";
import { Typography } from "@mui/material";

export const ItemPage = () => {
  const [item, setItem] = useRecoilState(selectedItem);
  const [isModal, setModal] = useRecoilState(isItemModal);
  const params = useParams();
  const [itemsToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    const itemId = params.itemId;
    (async function fetch() {
      let items = await apiClient.getItem(itemId);
      items = {
        ...items,
        listings: items.listings.map((currItem) => {
          return { ...currItem, id: utils.makeId() };
        }),
      };
      setItem(items.listings[0]);

      setItemsToShow(items);
    })();
  }, [setItem, params.itemId]);

  const handleSelectItem = (item: Item) => {
    setItem(item);
    setModal(true);
  };

  const handleCloseModal = () => {
    setItem(itemsToShow.listings[0]);
    setModal(false);
  };

  if (!itemsToShow.listings || !itemsToShow.listings.length)
    return (
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "50px",
        }}
        variant="h1"
        color={"white"}
      >
        None of the items is on sale...
      </Typography>
    );
  return (
    <Box sx={{ bgcolor: "custom.background" }}>
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
          {itemsToShow.listings.map((item) => {
            return (
              <ItemCard
                handleSelectedItem={handleSelectItem}
                key={item.id}
                item={item}
              >
                <ItemTitle
                  imgPath={itemsToShow.meta.image}
                  title={itemsToShow.meta.name}
                />
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
          <ItemPreview
            handleCloseModal={handleCloseModal}
            metaItem={itemsToShow.meta}
            item={item}
          />
        </Box>
      </Stack>
    </Box>
  );
};
