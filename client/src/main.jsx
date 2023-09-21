import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { GridThemeProvider } from 'styled-bootstrap-grid';
const gridTheme = {
  // default 12
  breakpoints: { // defaults below
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
    // or you can use aliases
    // veryGiant: 1440,
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    // default 15
    padding: 10,
  },
  col: {
    padding: 5,
    // default 15
  },
  container: {
    padding: 10,
    // default 15
    maxWidth: { // defaults below
      xxl: 1500,
      xl: 1440,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 290,
      // or you can use aliases
      // veryGiant: 1141,
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GridThemeProvider gridTheme={gridTheme}>
      <App />
    </GridThemeProvider>
  </BrowserRouter>

)
