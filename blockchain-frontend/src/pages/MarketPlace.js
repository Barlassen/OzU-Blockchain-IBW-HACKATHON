import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Marketplace = () => {
  const nfts = [
    { id: 1, name: 'Team A Exclusive', image: '/images/nft1.png', price: '0.5 ETH' },
    { id: 2, name: 'Player B Limited Edition', image: '/images/nft2.png', price: '1.2 ETH' },
    // Add more NFT objects as needed
  ];

  return (
    <Container maxWidth="lg" style={{ paddingTop: '50px', paddingBottom: '50px', color: '#fff' }}>
      <Typography variant="h3" style={{ color: '#12C2E8', marginBottom: '30px', fontWeight: 'bold' }}>
        NFT Marketplace
      </Typography>
      <Grid container spacing={4}>
        {nfts.map((nft) => (
          <Grid item xs={12} md={4} key={nft.id}>
            <Card style={{ backgroundColor: '#28094B', color: '#fff' }}>
              <CardMedia
                component="img"
                height="200"
                image={nft.image}
                alt={nft.name}
              />
              <CardContent>
                <Typography variant="h5" style={{ color: '#12C2E8', marginBottom: '10px' }}>
                  {nft.name}
                </Typography>
                <Typography variant="body2" style={{ marginBottom: '10px' }}>
                  {nft.price}
                </Typography>
                <Button variant="contained" color="primary" style={{ backgroundColor: '#12C2E8', color: '#28094B' }}>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Marketplace;
