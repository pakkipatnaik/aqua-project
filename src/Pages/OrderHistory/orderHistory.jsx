import * as React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import DownloadingIcon from '@mui/icons-material/Downloading';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import Modal from '../../Components/modal';

const orders = [
  {
    status: 'Completed',
    statusClass: 'btn_grid_order',
    statusIcon: CheckBoxOutlinedIcon,
    orderId: '22548713287815720584-500L',
    amount: '2500/-',
    time: '2024-08-20-12.20-13.00o',
    date: '2 days ago'
  },
  {
    status: 'Cancelled',
    statusClass: 'btn_grid_order1',
    statusIcon: DeleteOutlineOutlinedIcon,
    orderId: '22548713287815720584-500L',
    amount: '2500/-',
    time: '2024-08-20-12.20-13.00o',
    date: '2 days ago'
  },
  {
    status: 'In Progress',
    statusClass: 'btn_grid_order2',
    statusIcon: DownloadingIcon,
    orderId: '22548713287815720584-500L',
    amount: '2500/-',
    time: '2024-08-20-12.20-13.00o',
    date: '2 days ago'
  },
  {
    status: 'Pending',
    statusClass: 'btn_grid_order3',
    statusIcon: WarningOutlinedIcon,
    orderId: '22548713287815720584-500L',
    amount: '2500/-',
    time: '2024-08-20-12.20-13.00o',
    date: '2 days ago'
  }
];

const OrderCard = ({ status, statusClass, statusIcon: StatusIcon, orderId, amount, time, date, handleClickOpen }) => (
  <Grid lg={5.7}>
    <Card className='card_kaveri_order'>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <Button
            variant="contained"
            className={statusClass}
            startIcon={<StatusIcon />}
            onClick={() => handleClickOpen(status)}
          >
            {status}
          </Button>
        </Grid>
      </Grid>
      <CardContent className='card_content_right_order'>
        <Grid display='flex' justifyContent='space-between' alignItems="center" container>
          <Grid display='flex' gap={4} style={{ marginBottom: "10px" }} width="100%">
            <Grid display='flex' gap={2}>
              <EditNoteOutlinedIcon />
              <Typography className='num_order'>: <span style={{ marginLeft: "30px" }}>{orderId}</span></Typography>
            </Grid>
          </Grid>
          <Grid display='flex' gap={4} style={{ marginBottom: "10px" }} width="100%">
            <Grid display='flex' gap={2}>
              <PaidOutlinedIcon />
              <Typography className='num_order'>: <span style={{ marginLeft: "30px" }}>{amount}</span></Typography>
            </Grid>
          </Grid>
          <Grid display='flex' gap={4} style={{ marginBottom: "10px" }} width="100%">
            <Grid display='flex' gap={2}>
              <AccessTimeOutlinedIcon />
              <Typography className='num_order'>: <span style={{ marginLeft: "30px" }}>{time}</span></Typography>
            </Grid>
          </Grid>
          <Grid display='flex' gap={4} style={{ marginBottom: "10px" }} width="100%">
            <Grid display='flex' gap={2}>
              <ReplayOutlinedIcon />
              <Typography className='num_order'>: <span style={{ marginLeft: "30px" }}>{date}</span></Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid display="flex" justifyContent="right" alignItems="center">
          <Typography className='view_order_text'>VIEW ORDERS</Typography>
        </Grid>
      </CardContent>
    </Card>
  </Grid>
);

const OrderHistory = () => {
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const handleClickOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid style={{ padding: " 50px 0px" }} container>
        <Grid container gap={4}>
          {orders.map((order, index) => (
            <OrderCard
              key={index}
              {...order}
              handleClickOpen={handleClickOpen}
            />
          ))}
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          onClickOpen={handleClickOpen}
          content={modalContent}
        />
      </Grid>
    </>
  );
};

export default OrderHistory;
