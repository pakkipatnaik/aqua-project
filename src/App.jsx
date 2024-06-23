
import * as React from 'react';
import { useState, createContext, useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import WebIcon from '@mui/icons-material/Web';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import "../src/styles/dashboard.css";
import { CssBaseline, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import Logo from "../src/assets/Logo.svg"
import OrderHistory from './Pages/OrderHistory/orderHistory';
import Notification from './Pages/Notifications/notification';
import Dashboard from './Pages/Dashboard/dashboard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MUISwitch from './Components/switch';
import { ThemeContext } from './Components/themeComponent';
import Badge from '@mui/material/Badge';
import { useNavigate,useLocation } from 'react-router-dom';
import { ThemeProviderComponent } from './Components/themeComponent';


function App() {
  const { toggleTheme } = useContext(ThemeContext);
 console.log('bvyhvb',window.location.pathname) 

  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const notificationNavi = () => {
    window.location.href = "/notification"
  }
  const orderHistoryNavi = () => {
    window.location.href = "/orderhistory"
  }
  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (

    <BrowserRouter>
      <Grid container>
        <Grid container>
          <Grid lg={7} md={7} sm={12} className='logo_grid'>
            <Grid className='logo'>
              <img src={Logo} alt="Logo" />
            </Grid>
            <Grid className='search_grid'>
              <TextField
                variant="outlined"
                placeholder="Search or type a command"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                className='search'
              />
            </Grid>
          </Grid>
          <Grid lg={5} md={5} sm={12} xs={12} className='card_grid'>
            <Card className='card'>
              <CardContent className='card_content'>
                <AccountCircleIcon className='card_icon' />
                <PersonAddIcon className='card_icon' />
                <Badge badgeContent={1} color="error">
                  <NotificationsNoneOutlinedIcon className='card_icon' onClick={notificationNavi} />
                </Badge>

                <MUISwitch className='card_icon' onClick={toggleTheme} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container>
          <Grid lg={4} className='welcome_gridMain'>
          {window.location.pathname === "/" && (
            <Typography className='welcome'>
              Welcome !!
            </Typography>
          )}

          </Grid>
          <Grid item lg={8} sx={{ display: { lg: 'block', md: 'block', xs: 'none', sm: 'none' } }} className='welcome_grid'></Grid>
        </Grid>
        <Grid container>
          <Grid className='sidebar_grid' lg={1.5} md={1} sm={1.5} xs={2}>
          <Card className="s_card">
              <CardContent className='s_card_content'>
                <Grid>
                  <MenuIcon className='s_card_icon' onClick={toggleSidebar} />
                </Grid>
                {sidebarExpanded && (
                  <>
                    <Grid>
                      <WebIcon className='s_card_icon' />
                    </Grid>
                    <Grid>
                      <ArticleOutlinedIcon className='s_card_icon' onClick={orderHistoryNavi} />
                    </Grid>
                    <Grid>
                      <LocalShippingOutlinedIcon className='s_card_icon' />
                    </Grid>
                    <Grid>
                      <SettingsOutlinedIcon className='s_card_icon' />
                    </Grid>
                    <Grid>
                      <LogoutOutlinedIcon className='s_card_icon' />
                    </Grid>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid lg={10.5} md={10.5} sm={10} xs={9}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/orderhistory" element={<OrderHistory />} />
            </Routes>
          </Grid>
        </Grid>
      </Grid>


    </BrowserRouter>

  )
}

export default App;
