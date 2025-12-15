import React, { useEffect, useState } from 'react';
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

const slides = [
  {
    src: new URL('./assets/slideshow-1.jpg', import.meta.url).href
  },
  {
    src: new URL('./assets/slideshow-2.jpg', import.meta.url).href,
  },
  {
    src: new URL('./assets/slideshow-3.jpg', import.meta.url).href,
  },
  {
    src: new URL('./assets/slideshow-4.jpg', import.meta.url).href,
  },
];

const rotatingWords = ['beautifully.', 'confidently.', 'gracefully.'];

const services = [
  {
    name: 'Botox',
    description:
      'Smooth fine lines and soften expression lines with precise, targeted treatments for a refreshed look.',
    image: servicesImageBase[0].src,
  },
  {
    name: 'Skin Rejuvenation',
    description:
      'Even tone and boost radiance with advanced resurfacing and collagen-stimulating treatments.',
    image: servicesImageBase[2].src,
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={slide.src}
            role="img"
            aria-label={slide.alt}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${slide.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 1.1s ease-in-out',
              opacity: index === currentSlide ? 1 : 0,
              zIndex: 0,
            }}
          />
        ))}
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
              <RotatingText texts={rotatingWords} splitBy="characters" />
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
              fontFamily: '"Rosehot", "Roboto Flex", Arial, sans-serif',
              fontSize: { xs: '1.8rem', md: '2.6rem' },
            }}
          >
            Welcome to LIV Wellness & Aesthetics
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
            Beauty rooted in wellness. Wellness elevated by science
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
            LIV Wellness & Aesthetics is a haven of calm where science-led care meets timeless luxury. Whether you are
            replenishing your skin, restoring balance, or elevating your glow, every visit is designed to feel soothing,
            personal, and transformative.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/bookings"
            sx={{
              px: 4.5,
              py: 1.4,
              borderRadius: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 600,
              borderColor: '#8a6a3f',
              color: '#8a6a3f',
              '&:hover': { borderColor: '#8a6a3f', backgroundColor: 'rgba(138,106,63,0.08)' },
            }}
          >
            Book Online
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg"
        sx={{ mt: { xs: 6, md: 8 }, pb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontFamily: '"Rosehot", "Roboto Flex", Arial, sans-serif', fontWeight: 700 }}
        >
          SERVICES
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
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to="/bookings"
                  sx={{
                    alignSelf: 'flex-start',
                    mt: 'auto',
                    px: 3,
                    borderRadius: '999px',
                    textTransform: 'none'
                  }}
                >
                  Book your {service.name} appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/services"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: '999px',
              textTransform: 'none',
            }}
          >
            View all services
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
          sx={{ fontFamily: '"Rosehot", "Roboto Flex", Arial, sans-serif' }}
        >
          ABOUT US
        </Typography>
        <Typography variant="body1">
          LIV Wellness & Aesthetics is a luxury wellness and aesthetic studio dedicated to delivering natural, refined results through advanced medical treatments, longevity-focused therapies, and personalized care. Our soft-nude aesthetic reflects our philosophy: beauty should feel effortless, balanced, and timeless. At LIV, we elevate your wellness, enhance your beauty, and empower you to live confidently—inside and out.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/aboutus"
          sx={{
            borderRadius: '999px',
            textTransform: 'none',
            px: 4,
            py: 1.2,
            mt: 3,
          }}
        >
          View More
        </Button>
      </Container>
    </Box>
  );
}

export default Home;
