// @ts-nocheck
import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { CardBox } from "./styled-components/card-box.tsx";
import { CardInfoBox } from "./styled-components/card-info-box.tsx";
import { CardStack } from "./styled-components/card-stack.tsx";
import { Price } from "./price.tsx";

export const ItemPreview = () => {
  return (
    <section>
      <CardStack
        sx={{ backgroundColor: '#1E2022', height: '890px', justifyContent: 'unset', gap: '50px', paddingBottom: '30px' }}>
        <CardBox gap={'18px'} paddingTop={'14px'}>
          <img height={'35px'} src={require('../assets/images/scroll.svg').default} alt="scroll-pic" />
          <Typography variant="title">
            Dark scroll for Magic att 30%
          </Typography>
        </CardBox>
        <CardBox>
          <Grid
            justifyContent={'center'}
            sx={{ height: '700px' }} container spacing={2}>
            <Grid height={'20%'} item xs={5}>
              <CardInfoBox>
                <img style={{ 'position': 'absolute', 'top': '-30px', 'right': '18px' }} src={require('../assets/images/Card_Icon_Channel.svg').default} alt="room-icon" />
                <Typography variant="infoTitle">
                  Channel
                </Typography>
                <Typography variant="info">
                  4
                </Typography>
              </CardInfoBox>
            </Grid>
            <Grid height={'20%'} item xs={5}>
              <CardInfoBox>
                <img style={{ 'position': 'absolute', 'top': '-30px', 'right': '18px' }} src={require('../assets/images/Card_Icon_Room.svg').default} alt="channel-icon" />
                <Typography variant="infoTitle">
                  Room
                </Typography>
                <Typography variant="info">
                  7
                </Typography>
              </CardInfoBox>
            </Grid>
            <Grid marginTop={'20px'} height={'21%'} item xs={10}>
              <CardInfoBox>
                <img style={{ 'position': 'absolute', 'top': '-30px', 'right': '18px' }} src={require('../assets/images/Store_Icon.svg').default} alt="store-icon" />
                <Typography variant="infoTitle">
                  Store Name
                </Typography>
                <Typography variant="info">
                  4-7 top ladder dark scrolls
                </Typography>
              </CardInfoBox>
            </Grid>
            <Grid marginY={'20px'} height={'59%'} item xs={10}>
              <CardInfoBox>
                <img style={{ 'position': 'absolute', 'top': '-30px', 'right': '18px' }} src={require('../assets/images/Info Icon.svg').default} alt="info-icon" />
                <Typography variant="infoTitle">
                  Information
                </Typography>
                <Typography variant="description">
                Improves INT on the overall armor.
                  Success rate:30%, INT+5, magic defense+3, MaxMP+10
                  If failed, the item will be destroyed at a 50% rate.
                </Typography>
              </CardInfoBox>
            </Grid>
          </Grid>
        </CardBox>
        <Price paddingTop={'20px'} price={'13,000,000'} />
      </CardStack>
    </section>
  );
};


