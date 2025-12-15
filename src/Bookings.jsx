import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

function Bookings() {
  return (
    <Box component="main" sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontFamily: '"Rosehot", "Montserrat", Arial, sans-serif' }}
        >
          Book Your Visit
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 720, mx: 'auto', mb: 4, fontSize: { xs: '1.05rem', md: '1.15rem' }, lineHeight: 1.7 }}
        >
          We’re excited to craft a personalized experience for you. Choose a service to start, or contact our team if you
          need guidance on the best treatment plan.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/contact"
          sx={{ px: 4, py: 1.2, borderRadius: '999px', textTransform: 'none', fontSize: '1.05rem' }}
        >
          Contact Our Team
        </Button>
      </Container>
    </Box>
  );
}

export default Bookings;
