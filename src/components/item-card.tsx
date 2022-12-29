// @ts-nocheck
import { SvgIcon, Typography } from '@mui/material'
import * as React from 'react'
import { CardBox } from './styled-components/card-box.tsx'
import { CardStack } from './styled-components/card-stack.tsx'
import { ReactComponent as Coin } from '../assets/images/Coin.svg'


export const ItemCard = () => {
    return (
        <section className="item-card">
            <CardStack sx={{ backgroundColor: "primary.main" }}>
                <CardBox
                    gap={'18px'}
                    paddingTop={'14px'}
                >
                    <img height={'35px'} src={require('../assets/images/scroll.svg').default} alt='scroll-pic' />
                    <Typography variant='title'>
                        Dark scroll for Overall armor for INT 30%
                    </Typography>
                </CardBox>

                <CardBox
                    gap={'8px'}
                    paddingBottom={'17px'}
                >
                    <Coin />
                    <Typography variant='subtitle1'>
                        2,147,483,647
                    </Typography>
                </CardBox>
            </CardStack>





        </section>
    )
}