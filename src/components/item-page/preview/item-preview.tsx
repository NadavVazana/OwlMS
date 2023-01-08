// @ts-nocheck
import * as React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { CardBox } from "../../styled-components/card-box";
import { CardInfoBox } from "../../styled-components/card-info-box";
import { CardStack } from "../../styled-components/card-stack";
import { Price } from "../../../components/item-page/price";
import { ItemPreviewCard } from "./item-preview-card";
import { ItemTitle } from "../item-title";
import { Item } from "../models/item";
import { ReactComponent as CloseModalIcon } from "../../../assets/images/close-modal.svg";
import { Box } from "@mui/system";

type ItemPreviewProps = {
  item?: Item;
  handleCloseModal: () => void;
  metaItem?: Item;
};

export const ItemPreview = ({
  item,
  handleCloseModal,
  metaItem,
}: ItemPreviewProps) => {
  let statsTitles = [];
  if (item?.stats) statsTitles = Object.keys(item.stats);

  const screenHeight = +window.innerHeight;

  return (
    <React.Fragment>
      <CardStack
        sx={{
          borderRadius: { xs: "0", md: "14px" },
          transition: "all 0.3s",
          width: { xs: "100%", md: "40%" },
          backgroundColor: "#1E2022",
          height: { xs: "100%", md: screenHeight < 900 ? "80%" : "83%" },
          justifyContent: "unset",
          gap: { xs: "30px", md: "50px" },
          position: "fixed",
          top: {
            xs: "110px",
            md: "120px",
          },
          paddingBottom: "30px",
          marginInlineEnd: { xs: "0", md: "30px" },
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            right: "10px",
            top: "5px",
          }}
        >
          <CloseModalIcon onClick={handleCloseModal} />
        </Box>
        <CardBox gap={"18px"} paddingTop={"14px"}>
          <ItemTitle imgPath={metaItem.image} title={metaItem.name} />
        </CardBox>
        <CardBox>
          <Grid
            justifyContent={"center"}
            sx={{
              height: {
                md: "550px",
                xs: "100%",
              },
            }}
            container
            spacing={1}
          >
            <Grid
              sx={{
                height: { xs: "25%", md: "25%" },
              }}
              item
              xs={5}
            >
              <ItemPreviewCard title="Channel" info={item?.channel}>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={
                    require("../../../assets/images/Card_Icon_Channel.svg")
                      .default
                  }
                  alt="channel-icon"
                />
              </ItemPreviewCard>
            </Grid>
            <Grid
              sx={{
                height: { xs: "25%", md: "25%" },
              }}
              item
              xs={5}
            >
              <ItemPreviewCard title="Room" info={item.free_market}>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={
                    require("../../../assets/images/Card_Icon_Room.svg").default
                  }
                  alt="channel-icon"
                />
              </ItemPreviewCard>
            </Grid>
            <Grid
              marginTop={"20px"}
              sx={{ height: { xs: "25%", md: "25%" } }}
              item
              xs={10}
            >
              <CardInfoBox>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={require("../../../assets/images/Store_Icon.svg").default}
                  alt="store-icon"
                />
                <Typography variant="infoTitle">Store Name</Typography>
                <Typography variant="info">{item.name}</Typography>
              </CardInfoBox>
            </Grid>
            <Grid
              marginY={"20px"}
              sx={{
                height: {
                  xs: screenHeight > 750 ? "400px" : "200px",
                  md: screenHeight < 900 ? "25%" : "59%",
                },
                maxHeight: { xs: "30%", md: "59%" },
              }}
              item
              xs={10}
            >
              <CardInfoBox>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={require("../../../assets/images/Info Icon.svg").default}
                  alt="info-icon"
                />
                <Typography variant="infoTitle">Information</Typography>
                <Typography
                  sx={{
                    whiteSpace: "pre-line",
                    alignSelf: "flex-start",
                    boxSizing: "border-box",
                    padding: "10px",
                    width: "100%",
                    "::-webkit-scrollbar": {
                      width: "10px",
                    },
                    "::-webkit-scrollbar-thumb": {
                      background: "black",
                      borderRadius: "15px",
                    },
                  }}
                  variant="description"
                >
                  {metaItem?.kind === "Equip" && statsTitles && item?.stats && (
                    <>
                      {statsTitles.map(
                        (statTitle) =>
                          `${statTitle} : ${item.stats[statTitle]} \n`
                      )}
                      <Divider
                        light={true}
                        sx={{
                          borderColor: "custom.background",
                          borderWidth: "1px",
                        }}
                      />
                    </>
                  )}

                  {metaItem.description}
                </Typography>
              </CardInfoBox>
            </Grid>
          </Grid>
        </CardBox>
        <Price
          screenHeight={screenHeight}
          isForPreview={true}
          price={item.price}
        />
      </CardStack>
    </React.Fragment>
  );
};
