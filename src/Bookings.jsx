import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

function Bookings() {
  const { t } = useLanguage();

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
          {t.bookings.pageTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: 720, mx: 'auto', mb: 4, fontSize: { xs: '1.05rem', md: '1.15rem' }, lineHeight: 1.7 }}
        >
          {t.bookings.pageBody}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/contact"
          sx={{ px: 4, py: 1.2, borderRadius: '999px', textTransform: 'none', fontSize: '1.05rem' }}
        >
          {t.bookings.contactTeam}
        </Button>
      </Container>
    </Box>
  );
}

export default Bookings;
