// @ts-nocheck
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { CardBox } from "./styled-components/card-box";
import { CardInfoBox } from "./styled-components/card-info-box";
import { CardStack } from "./styled-components/card-stack";
import { Price } from "./price";
import { ItemPreviewCard } from "./item-preview-card";
import { ItemTitle } from "./item-title";
import { Item } from "../models/item";
import { useRecoilValue } from "recoil";
import { isVisible } from "../atoms/is-visible";
import { ReactComponent as CloseModalIcon } from "../assets/images/close-modal.svg";
import { Box } from "@mui/system";

type ItemPreviewProps = {
  item?: Item;
  handleCloseModal: () => void;
};

export const ItemPreview = ({ item, handleCloseModal }: ItemPreviewProps) => {
  const visible = useRecoilValue(isVisible);

  return (
    <React.Fragment>
      <CardStack
        sx={{
          transition: "all 0.3s",
          backgroundColor: "#1E2022",
          height: "fit-content",
          justifyContent: "unset",
          gap: { xs: "30px", md: "20px" },
          position: "fixed",
          top: {
            xs: visible ? "110px" : "10px",
            md: visible ? "125px" : "40px",
          },
          paddingBottom: "30px",
          marginInlineEnd: { xs: "5px", md: "40px" },
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
        >
          <CloseModalIcon onClick={handleCloseModal} />
        </Box>
        <CardBox gap={"18px"} paddingTop={"14px"}>
          <ItemTitle title={item.item_name} />
        </CardBox>
        <CardBox>
          <Grid
            justifyContent={"center"}
            sx={{
              height: {
                md: visible ? "550px" : "610px",
                xs: visible ? "280px" : "350px",
              },
            }}
            container
            spacing={2}
          >
            <Grid sx={{ height: { xs: "40%", md: "20%" } }} item xs={5}>
              <ItemPreviewCard title="Channel" info={item.channel}>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={
                    require("../assets/images/Card_Icon_Channel.svg").default
                  }
                  alt="channel-icon"
                />
              </ItemPreviewCard>
            </Grid>
            <Grid sx={{ height: { xs: "40%", md: "20%" } }} item xs={5}>
              <ItemPreviewCard title="Room" info={item.room}>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={require("../assets/images/Card_Icon_Room.svg").default}
                  alt="channel-icon"
                />
              </ItemPreviewCard>
            </Grid>
            <Grid
              marginTop={"20px"}
              sx={{ height: { xs: "40%", md: "20%" } }}
              item
              xs={10}
            >
              <CardInfoBox>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={require("../assets/images/Store_Icon.svg").default}
                  alt="store-icon"
                />
                <Typography variant="infoTitle">Store Name</Typography>
                <Typography variant="info">{item?.store_name}</Typography>
              </CardInfoBox>
            </Grid>
            <Grid
              marginY={"20px"}
              sx={{ height: { xs: "40%", md: "59%" } }}
              item
              xs={10}
            >
              <CardInfoBox>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={require("../assets/images/Info Icon.svg").default}
                  alt="info-icon"
                />
                <Typography variant="infoTitle">Information</Typography>
                <Typography variant="description">
                  Improves INT on the overall armor. Success rate:30%, INT+5,
                  magic defense+3, MaxMP+10 If failed, the item will be
                  destroyed at a 50% rate.
                </Typography>
              </CardInfoBox>
            </Grid>
          </Grid>
        </CardBox>
        <Price isForPreview={true} price={item?.item_price} />
      </CardStack>
    </React.Fragment>
  );
};
