import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const MyNFTs = () => {
  const ownedNFTs = [
    { id: 1, name: 'Ferrari F1 - F2 Integrated', image: require('../assets/f1.png') },
    { id: 2, name: 'Yusuf Dikeç Natural Shooter Edition', image: require('../assets/yusuf.png') },
  ];

  return (
    <Container maxWidth="lg" style={{ paddingTop: '50px', paddingBottom: '50px', color: '#fff' }}>
      <Typography variant="h3" style={{ color: '#12C2E8', marginBottom: '30px', fontWeight: 'bold' }}>
        My NFTs
      </Typography>
      <Grid container spacing={4}>
        {ownedNFTs.map((nft) => (
          <Grid item xs={12} md={4} key={nft.id}>
            <Card style={{ backgroundColor: '#28094B', color: '#fff', minHeight: '400px' }}>
              <CardMedia
                component="img"
                style={{ height: '200px', objectFit: 'cover' }}  // Adjust image to fit within the card
                image={nft.image}
                alt={nft.name}
              />
              <CardContent>
                <Typography variant="h5" style={{ color: '#12C2E8', marginBottom: '10px' }}>
                  {nft.name}
                </Typography>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  Access your exclusive content or benefits.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyNFTs;
