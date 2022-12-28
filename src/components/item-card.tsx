import { Card, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import * as React from 'react'

export const ItemCard = () => {

    return (
        <section className="item-card">
            {/* <Card sx={{ backgroundColor: "primary.main", height: '120px' }}> */}
                <Stack sx={{ backgroundColor: "primary.main", height: '120px' }}>
                    <Box
                        display={'flex'}
                        gap={'15px'}
                        justifyContent={'center'}>
                        <img src={require('../assets/images/scroll.svg').default} alt='scroll-pic' />
                        <Typography>
                            <h3>
                                Dark scroll for Overall armor for INT 30%
                            </h3>
                        </Typography>
                    </Box>

                    <Box
                        display={'flex'}
                        gap={'8px'}
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <img height={'24px'} src={require('../assets/images/Coin.svg').default} alt="coin-pic" />
                        <Typography>
                            <h4>
                                13,000,000
                            </h4>
                        </Typography>
                    </Box>
                </Stack>





            {/* </Card> */}
        </section>
    )
}