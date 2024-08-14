import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const DAOPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Decentralized Autonomous Organization (DAO)
        </Typography>
        <Typography variant="body1" paragraph>
          A Decentralized Autonomous Organization (DAO) is a revolutionary structure that provides a new way of organizing people and resources without centralized control. SportsDAO aims to empower fans, players, and stakeholders by giving them a voice in critical decisions.
        </Typography>
        <Typography variant="body1" paragraph>
          Within SportsDAO, token holders can participate in governance, propose new ideas, and vote on decisions that shape the future of sports management. This transparency and democratization ensure that every voice is heard, and every decision is aligned with the community's best interests.
        </Typography>
        <Typography variant="body1">
          Join us on this exciting journey to redefine the way sports organizations operate. Together, we can create a more inclusive and innovative environment.
        </Typography>
      </Box>
    </Container>
  );
};

export default DAOPage;
