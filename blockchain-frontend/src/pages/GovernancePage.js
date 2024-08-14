import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const GovernancePage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Governance Process
        </Typography>
        <Typography variant="body1" paragraph>
          Governance is at the heart of SportsDAO, where every token holder has the power to influence decisions. Our governance process is transparent, fair, and designed to ensure that all stakeholders have a voice in the organization's direction.
        </Typography>
        <Typography variant="body1" paragraph>
          Through a combination of on-chain and off-chain voting, proposals are evaluated, discussed, and decided upon by the community. This ensures that every decision reflects the collective wisdom of the participants.
        </Typography>
        <Typography variant="body1">
          Learn more about how you can participate in governance, submit proposals, and help shape the future of sports management.
        </Typography>
      </Box>
    </Container>
  );
};

export default GovernancePage;
