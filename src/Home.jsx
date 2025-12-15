import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';
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
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: '4rem', fontFamily: '"Rosehot", "Roboto Flex", Arial, sans-serif' }}
          >
            Welcome to LIV Wellness & Aesthetics
          </Typography>
          <Typography variant="h6" component="p" sx={{ maxWidth: 680, mb: 3, fontStyle: 'italic' }}>
            LIV beautifully. LIV confidently. LIV gracefully.
            <br />
            Where subtle enhancements create powerful confidence.
            <br />
            Beauty rooted in wellness. Wellness elevated by science
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/bookings"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: '999px',
              textTransform: 'none',
              fontSize: '1.2rem',
              bgcolor: 'secondary.main',
            }}
          >
            Book an Appointment
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
