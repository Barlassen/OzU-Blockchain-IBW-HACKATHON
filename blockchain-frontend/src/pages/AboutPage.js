import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          About SportsDAO
        </Typography>
        <Typography variant="body1" paragraph>
          SportsDAO is more than just a platform—it's a community-driven movement to bring innovation, transparency, and inclusivity to the world of sports management. Founded by a passionate team of sports enthusiasts, technologists, and blockchain experts, SportsDAO aims to empower fans and stakeholders alike.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to democratize the decision-making process within sports organizations, giving fans a direct say in how their favorite teams and events are run. By leveraging blockchain technology, we're able to create a transparent, secure, and decentralized platform where every voice can be heard.
        </Typography>
        <Typography variant="body1">
          Join us on this exciting journey and become part of a community that's shaping the future of sports.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
