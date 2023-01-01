// @ts-nocheck
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { CardBox } from "./styled-components/card-box";
import { CardInfoBox } from "./styled-components/card-info-box";
import { CardStack } from "./styled-components/card-stack";
import { Price } from "./price";
import { ItemPreviewCard } from "./item-preview-card";
import { ItemTitle } from "./item-title";

export const ItemPreview = () => {
  return (
    <React.Fragment>
      <CardStack
        sx={{
          backgroundColor: "#1E2022",
          height: "890px",
          justifyContent: "unset",
          gap: "50px",
          paddingBottom: "30px",
        }}
      >
        <CardBox gap={"18px"} paddingTop={"14px"}>
          <ItemTitle title="Dark scroll for overall Armor for INT 30%" />
        </CardBox>
        <CardBox>
          <Grid
            justifyContent={"center"}
            sx={{ height: "700px" }}
            container
            spacing={2}
          >
            <Grid height={"20%"} item xs={5}>
              <ItemPreviewCard title="Channel" info="4">
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={
                    require("../assets/images/Card_Icon_Channel.svg").default
                  }
                  alt="channel-icon"
                />
              </ItemPreviewCard>
            </Grid>
            <Grid height={"20%"} item xs={5}>
              <ItemPreviewCard title="Room" info="7">
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={require("../assets/images/Card_Icon_Room.svg").default}
                  alt="channel-icon"
                />
              </ItemPreviewCard>
            </Grid>
            <Grid marginTop={"20px"} height={"21%"} item xs={10}>
              <CardInfoBox>
                <img
                  style={{ position: "absolute", top: "-20px", right: "5px" }}
                  src={require("../assets/images/Store_Icon.svg").default}
                  alt="store-icon"
                />
                <Typography variant="infoTitle">Store Name</Typography>
                <Typography variant="info">
                  4-7 top ladder dark scrolls
                </Typography>
              </CardInfoBox>
            </Grid>
            <Grid marginY={"20px"} height={"59%"} item xs={10}>
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
        <Price paddingTop={"20px"} price={"13,000,000"} />
      </CardStack>
    </React.Fragment>
  );
};
