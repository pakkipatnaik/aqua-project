import React, { useState, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

const ThemeContext = createContext();

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000',
            paper: '#000000',
        },
        text: {
            primary: '#ffffff',
        },
    },
});

const ThemeProviderComponent = ({ children }) => {
    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.palette.mode === 'light' ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles container
                    styles={{
                        body: {
                            backgroundImage: theme.palette.mode === 'light'
                                ? 'url(../../src/assets/Light_Background.svg)'
                                : 'url(../../src/assets/background.svg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundColor: theme.palette.background.default,
                            margin: 0,
                            padding: 0,
                            height: '100vh !important',
                            width: '100vw',
                            color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                            '@media (max-width: 600px)': {
                                backgroundImage: 'none',
                                backgroundColor:theme.palette.mode === 'light'? 'lightblue': "rgb(16 16 16) !important"
                            },
                            '@media (max-width: 960px) and (min-width: 600px)': {
                                backgroundImage: 'none',
                                backgroundColor:theme.palette.mode === 'light'? 'lightblue': "rgb(16 16 16) !important"
                            },
                            '@media (max-width: 1410px) and (min-width: 961px)': {
                                backgroundImage: 'none',
                                  backgroundColor:theme.palette.mode === 'light'? 'lightblue': "rgb(16 16 16) !important"
                            },
                        },
                        '.welcome_grid': {
                            backgroundImage: theme.palette.mode === 'light'
                                ? 'url("../../src/assets/Light_TopImage.svg")'
                                : 'url("../../src/assets/TopImage.svg")',
                            height: '500px',
                            position: 'absolute',
                            top: '124px',
                            width: '600px',
                            backgroundRepeat: 'no-repeat',
                            right: 0,
                        },
                        '.card': {
                            backgroundColor: theme.palette.mode === 'light' ? 'lightblue !important' : " rgb(14 14 14 / 34%) !important"
                        },
                        '.s_card': {
                         
                            backgroundColor: theme.palette.mode === 'light' ? 'lightblue !important' : " rgb(14 14 14 / 34%) !important"
                        },
                        ' .carousel_grid': {
                            backgroundColor: theme.palette.mode === 'light' ? '#ebf3f6 !important' : " rgb(6 6 6) !important",
                            
                        },
                        '.right_grid': {
                            backgroundColor: theme.palette.mode === 'light' ? '#ebf3f6 !important' : " rgb(6 6 6) !important",
                          
                        },
                        '.card_kaveri': {
                            backgroundColor: theme.palette.mode === 'light' ? 'lightblue !important' : " rgb(6 6 6) !important",
                            
                        },
                        '.order_tank': {
                            color: theme.palette.mode === 'light' ? '#000000' : "#5353fbfc",
                        },
                        '.kaveri': {
                            color: theme.palette.mode === 'light' ? '#000000' : "#5353fbfc",
                        },
                        '.num': {
                            color: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                        },
                        '.icon': {
                            color: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                        },
                        '.view_order': {
                            color: theme.palette.mode === 'light' ? '#000000' : "#5353fbfc",
                        },
                        ' .search': {
                            width: '100%',
                            backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : " rgb(46, 44, 44)",
                            borderRadius: "10px",
                            border: theme.palette.mode === 'light' ? '#000000' : "1px solid white",
                            color: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                        },
                       '.search .MuiInputBase-input::placeholder': {
                            color: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                        },
                        '.search .MuiSvgIcon-root': {
                            color: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                        },
                       ' .card_kaveri_noti': {
                            backgroundColor:theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                            opacity: "0.5",
                         
                        },
                        '.card_content_right_noti':{
                            color: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                        },
                        '.kaveri_noti':{
                            color: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                        },
                        '.btn_mainGrid':{
                            backgroundColor: theme.palette.mode === 'light' ? 'lightblue' : "rgb(6 6 6)",
                        },
                        '.card_kaveri_order':{
                            backgroundColor: theme.palette.mode === 'light' ? '#ffffff ' : " rgb(6 6 6)",
                        },
                        '.card_content_right_order':{
                            color: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                        },
                        '.custom-grid':{
                            backgroundColor: theme.palette.mode === 'light' ? '#ffffff !important' :'rgb(6 6 6) !important',
                           
                        },
                        '.custom-grid .MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
                            strokeWidth: "0.4",
                            fill: theme.palette.mode === 'light' ? '#000000' : "#ffffff"
                          },
            
                          "custom-grid .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                            fontFamily: "Roboto",
                          },
            
                          "custom-grid .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                            strokeWidth: "0.5",
                            fill: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                          },
            
                          "custom-grid .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                            stroke: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                            strokeWidth: 0.4
                          },
            
                          "custom-grid .MuiChartsAxis-left .MuiChartsAxis-line": {
                            stroke: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                            strokeWidth: 0.4
                          },
                          'custom-grid .MuiChartsAxis-top': {
                            stroke: theme.palette.mode === 'light' ? '#000000' : "#ffffff",
                            strokeWidth: 0.4
                          },
                          'custom-grid .MuiChartsLegend-root .MuiChartsLegend-series text': {
                            fill: theme.palette.mode === 'light' ? '#000000 !important' : "#ffffff !important",
                          },
                          '.carousel_image':{
                            backgroundImage: theme.palette.mode === 'light'?  'url("../../src/assets/Light_TopImage.svg") !important'
                                : 'url("../../src/assets/TopImage.svg") !important',
                          }
                    
                    }}
                />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeProviderComponent, ThemeContext };
