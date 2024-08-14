import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#28094B', padding: '0 20px' }}>
      <Toolbar style={{ minHeight: '70px', paddingLeft: '20px', paddingRight: '20px' }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ fontSize: '1.5rem', flex: '1', color: '#ffffff', textDecoration: 'none' }}
        >
          SFT | Sport Functional Token
        </Typography>
        <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/marketplace" style={{ textTransform: 'none', color: '#ffffff' }}>
            Marketplace
          </Button>
          <Button color="inherit" component={Link} to="/my-nfts" style={{ textTransform: 'none', color: '#ffffff' }}>
            My NFTs
          </Button>
          <Button color="inherit" component={Link} to="/about" style={{ textTransform: 'none', color: '#ffffff' }}>
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
