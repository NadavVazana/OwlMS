// @ts-nocheck
import { Typography } from '@mui/material'
import * as React from 'react'
import { CardBox } from './styled-components/card-box.tsx'
import { CardStack } from './styled-components/card-stack.tsx'
import { Price } from './price.tsx'


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
                <Price price={'13,000,000'}/>
            </CardStack>
        </section>
    )
}