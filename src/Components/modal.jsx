import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { styled, useTheme } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  },
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
  },
  '& .MuiTypography-root': {
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  },
}));

const WhiteDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
}));

const Modal = ({ open, onClose, onClickOpen, content }) => {
  const theme = useTheme();

  const handleClose = () => {
    onClose();
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth={true}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='modal_orderId'>
        ORDER ID: 218974978653412
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <WhiteDivider />
      <DialogContent>
        <Typography gutterBottom className='modal_text'>
          No Timeline Data Found For This Order
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} className='modal_btn'>
          View More
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default Modal;
