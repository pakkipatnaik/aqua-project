import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselImage from "../../assets/carousel.png";
import Logo from "../../assets/Logo.svg";
import { BarChart } from '@mui/x-charts/BarChart';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { ThemeContext } from '../../Components/themeComponent';

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Grid className='main_grid_dashboard' container >
        <Grid lg={5} md={12} sm={12} xs={12}>
          <Grid className="carousel_grid">
            <Carousel
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src={Logo} className='carousel_image' />
              </div>
              <div>
                <img src={Logo} className='carousel_image' />
              </div>
              <div>
                <img src={Logo} className='carousel_image' />
              </div>
            </Carousel>
          </Grid>
          <Typography className='statistics'>Statistics</Typography>
          <Grid className='custom-grid'

          >
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['17 Sun', '18 Mon', '19 Tue', '20 Wed', '21 Thu', '22 Fri', '23 Sat'] }]}
              grid={{ horizontal: true, color: "white" }}
              borderRadius={5}
              series={[{ data: [4, 3, 5, 6, 7, 8, 9], label: "this week", color: '#ffffff' }, { data: [1, 6, 3, 4, 5, 6, 6], label: "last week", color: '#5fb5d1' }]}
              height={300}
              className='bar_chart'
            // sx={{width:"500px"}}

            />
          </Grid>
        </Grid>
        <Grid lg={6.7} md={12} sm={12} xs={12} className='right_grid'>
          <Grid className='right_wrap'>
            <Typography className='order_tank'>ORDER TANK</Typography>
            <Grid>
              <Card className='card_kaveri'>
                <CardContent className='card_content_right'>
                  <Grid display='flex' justifyContent='space-between' container>
                    <Typography className='kaveri'>Kaveri Water Supply</Typography>
                    <Grid>
                      <Typography className='view_order'>View Order</Typography>
                    </Grid>
                    <Grid display='flex' gap={4} width="100%">
                      <Grid display='flex' gap={2}>
                        <PaidOutlinedIcon className='icon' />
                        <Typography className='num'>: <span style={{ marginLeft: "30px" }}>2500</span></Typography>
                      </Grid>
                      <Grid display='flex' gap={2}>
                        <PaidOutlinedIcon className='icon' />
                        <Typography className='num'>: <span style={{ marginLeft: "30px" }}>2500</span></Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                </CardContent>

              </Card>
            </Grid>
            <Grid>
              <Card className='card_kaveri'>
                <CardContent className='card_content_right'>
                  <Grid display='flex' justifyContent='space-between' container>
                    <Typography className='kaveri'>Kaveri Water Supply</Typography>
                    <Grid>
                      <Typography className='view_order'>View Order</Typography>
                    </Grid>
                    <Grid display='flex' gap={4} width="100%">
                      <Grid display='flex' gap={2}>
                        <PaidOutlinedIcon className='icon' />
                        <Typography className='num'>: <span style={{ marginLeft: "30px" }}>2500</span></Typography>
                      </Grid>
                      <Grid display='flex' gap={2}>
                        <PaidOutlinedIcon className='icon' />
                        <Typography className='num'>: <span style={{ marginLeft: "30px" }}>2500</span></Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                </CardContent>

              </Card>
            </Grid>
            <Grid>

            </Grid>
          </Grid>

          <Grid lg={12} justifyContent="right" display="flex" >
            <Button className='btn_grid'>View All</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};

export default Dashboard;