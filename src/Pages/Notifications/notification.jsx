import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const notifications = [
  { message: 'Logged in successfully', time: '2 days ago' },
  { message: 'Logged in successfully', time: '2 days ago' },
  { message: '523622 Tanker is ordered', time: '2 min ago' },
  { message: '523622 Tanker is ordered', time: '2 min ago' },
  { message: '523622 Tanker is ordered', time: '2 min ago' },
  { message: '523622 Tanker is ordered', time: '2 min ago' },
];

const NotificationCard = ({ message, time }) => (
  <Card className='card_kaveri_noti'>
    <CardContent className='card_content_right_noti'>
      <Grid display='flex' justifyContent='space-between' container>
        <Typography className='kaveri_noti'>{message}</Typography>
        <Grid display='flex' gap={4} width="100%">
          <Grid display='flex' gap={2}>
            <ReplayOutlinedIcon />
            <Typography className='num_noti'>: <span style={{ marginLeft: "30px" }}>{time}</span></Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const Notification = () => (
  <Grid lg={11.5} className='main_grid_noti'container>
    <Grid lg={12} md={12} sm={12} xs={12} justifyContent="right" display="flex" alignItems="center" color="#ffffff">
      <Grid lg={2} className='btn_mainGrid' justifyContent="center" display="flex" alignItems="center">
        <CheckBoxOutlinedIcon />
        <Button className='btn_grid_noti'>MARK ALL SEEN</Button>
      </Grid>
    </Grid>
    <Grid lg={12} md={12} sm={12} xs={12}>
      {notifications.map((notification, index) => (
        <NotificationCard 
          key={index}
          message={notification.message}
          time={notification.time}
        />
      ))}
    </Grid>
  </Grid>
);

export default Notification;
