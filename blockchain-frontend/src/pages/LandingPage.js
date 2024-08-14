import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { ethers } from 'ethers';

const LandingPage = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.error("Connection error:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  };

  return (
    <Container maxWidth="lg" style={{ paddingTop: '50px', paddingBottom: '50px', color: '#fff' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" style={{ color: '#12C2E8', fontWeight: 'bold', marginBottom: '20px' }}>
            Own a Piece of Your Favorite Team
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '30px' }}>
            Get exclusive access, vote on key decisions, and enjoy one-of-a-kind experiences by holding our loyalty NFTs. Join the revolution in sports fandom today!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={connectWallet}
            style={{ backgroundColor: '#28094B', color: '#fff', padding: '10px 20px' }}
          >
            {account ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect Wallet'}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              height: '300px',
              backgroundColor: '#28094B',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" style={{ color: '#12C2E8' }}>
              [NFT Image or Graphic Here]
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
