import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';
import RotatingText from './RotatingText.jsx';
import { servicesImageBase } from './data/servicesImageBase.js';
import { useLanguage } from './LanguageContext';

const heroBackground = new URL('./assets/background-home.jpg', import.meta.url).href;

const outlinedButtonSx = {
  px: 4.5,
  py: 1.4,
  borderRadius: 0,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  fontWeight: 600,
  borderColor: '#8a6a3f',
  color: '#8a6a3f',
  '&:hover': { borderColor: '#8a6a3f', backgroundColor: 'rgba(138,106,63,0.08)' },
};

const serviceImages = [servicesImageBase[0].src, servicesImageBase[2].src];

function Home() {
  const { t } = useLanguage();

  const services = t.home.featuredServices.map((s, i) => ({
    ...s,
    image: serviceImages[i],
  }));

  return (
    <Box component="main">
      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: { xs: '60vh', md: '75vh' },
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          overflow: 'hidden',
          backgroundColor: '#111',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: '40vh', md: '50vh' },
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: { xs: 0.8, md: 1.4 },
                fontWeight: 700,
                fontSize: { xs: '2.2rem', sm: '3.1rem', md: '4.4rem' },
                letterSpacing: { xs: '0.02em', md: '0.05em' },
              }}
            >
              <Box component="span">LIV</Box>
              <RotatingText texts={t.home.rotatingWords} splitBy="characters" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          backgroundColor: '#f6f1e6',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6), transparent 45%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.5), transparent 40%)',
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: '"Rosehot", "Montserrat", Arial, sans-serif',
              fontSize: { xs: '1.8rem', md: '2.6rem' },
            }}
          >
            {t.home.welcomeTitle}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 1.5,
              mb: 3,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'secondary.main',
              fontWeight: 600,
              fontSize: { xs: '0.95rem', md: '1.1rem' },
            }}
          >
            {t.home.welcomeSubtitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 960,
              mx: 'auto',
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              lineHeight: 1.85,
              color: '#2f2a25',
              mb: 4,
            }}
          >
            {t.home.welcomeBody}
          </Typography>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/services"
            sx={outlinedButtonSx}
          >
            {t.home.bookOnline}
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg"
        sx={{ mt: { xs: 6, md: 8 }, pb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontFamily: '"Rosehot", "Montserrat", Arial, sans-serif', fontWeight: 700 }}
        >
          {t.home.servicesHeading}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: { xs: 2.5, md: 3 },
            alignItems: 'stretch',
          }}
        >
          {services.map((service) => (
            <Card
              key={service.name}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  height: 200,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                <Typography variant="h6" component="h3">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                  {service.description}
                </Typography>
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/services"
                  sx={{ ...outlinedButtonSx, alignSelf: 'flex-start', mt: 'auto' }}
                >
                  {t.home.bookYour} {service.name} {t.home.appointment}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/services"
            sx={outlinedButtonSx}
          >
            {t.home.viewAllServices}
          </Button>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{ mt: { xs: 6, md: 8 }, pb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontFamily: '"Rosehot", "Montserrat", Arial, sans-serif' }}
        >
          {t.home.aboutUsHeading}
        </Typography>
        <Typography variant="body1">
          {t.home.aboutUsBody}
        </Typography>
        <Button
          variant="outlined"
          component={RouterLink}
          to="/aboutus"
          sx={{ ...outlinedButtonSx, mt: 3 }}
        >
          {t.home.viewMore}
        </Button>
      </Container>
    </Box>
  );
}

export default Home;
