import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Marketplace = () => {
  const nfts = [
    { id: 1, name: 'Ferrari F1 - F2 Integrated', image: require('../assets/f1.png'), price: '0.5 ETH' },
    { id: 2, name: 'Yusuf Dikeç Natural Shooter Edition', image: require('../assets/yusuf.png'), price: '1.2 ETH' },
  ];

  return (
    <Container maxWidth="lg" style={{ paddingTop: '50px', paddingBottom: '50px', color: '#fff' }}>
      <Typography variant="h3" style={{ color: '#12C2E8', marginBottom: '30px', fontWeight: 'bold' }}>
        NFT Marketplace
      </Typography>
      <Grid container spacing={4}>
        {nfts.map((nft) => (
          <Grid item xs={12} md={4} key={nft.id}>
            <Card style={{ backgroundColor: '#28094B', color: '#fff', minHeight: '400px' }}>
              <CardMedia
                component="img"
                style={{ height: '200px', objectFit: 'cover' }}
                image={nft.image}
                alt={nft.name}
              />
              <CardContent>
                <Typography variant="h5" style={{ color: '#12C2E8', marginBottom: '10px' }}>
                  {nft.name}
                </Typography>
                <Typography variant="body2" style={{ marginBottom: '20px' }}>
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
