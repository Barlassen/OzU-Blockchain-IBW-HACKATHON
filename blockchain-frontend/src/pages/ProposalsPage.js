import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ProposalsPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Active Proposals
        </Typography>
        <Typography variant="body1" paragraph>
          The Proposals section is where the community comes together to discuss, debate, and vote on the future direction of SportsDAO. Every proposal represents an opportunity for innovation and improvement, and your participation is crucial.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're interested in introducing new sports to the platform, improving governance mechanisms, or creating new community initiatives, this is the place to make your voice heard.
        </Typography>
        <Typography variant="body1">
          Browse the active proposals below, join the discussion, and cast your vote to help shape the future of sports.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProposalsPage;
