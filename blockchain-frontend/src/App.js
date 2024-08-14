import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './pages/LandingPage';
import Marketplace from './pages/MarketPlace';
import MyNFTs from './pages/MyNFTs';
import Navbar from './Navbar';

// Define the theme using your color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#12C2E8',
    },
    secondary: {
      main: '#28094B',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#12C2E8',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontWeight: 700,
      color: '#12C2E8',
    },
    h3: {
      fontWeight: 700,
      color: '#12C2E8',
    },
    h5: {
      fontWeight: 500,
      color: '#12C2E8',
    },
    body1: {
      color: '#ffffff',
    },
    body2: {
      color: '#12C2E8',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/my-nfts" element={<MyNFTs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
