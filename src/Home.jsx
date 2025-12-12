import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const slides = [
  {
    src: new URL('./assets/slideshow-1.jpg', import.meta.url).href,
    alt: 'Spa stones and candle',
  },
  {
    src: new URL('./assets/slideshow-2.jpg', import.meta.url).href,
    alt: 'Massage therapy session',
  },
  {
    src: new URL('./assets/slideshow-3.jpg', import.meta.url).href,
    alt: 'Aromatherapy essentials',
  },
  {
    src: new URL('./assets/slideshow-4.jpg', import.meta.url).href,
    alt: 'Relaxing spa setup',
  },
];

const services = [
  {
    name: 'Botox',
    description:
      'Smooth fine lines and soften expression lines with precise, targeted treatments for a refreshed look.',
    image:
      'https://images.unsplash.com/photo-1508387024700-9fe5c0b37ccd?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dermal Fillers',
    description:
      'Restore volume and enhance natural contours with hyaluronic-acid fillers tailored to your features.',
    image:
      'https://images.unsplash.com/photo-1508387024700-9fe5c0b37ccd?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Skin Rejuvenation',
    description:
      'Even tone and boost radiance with advanced resurfacing and collagen-stimulating treatments.',
    image:
      'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'IV Therapy',
    description:
      'Hydrate, energize, and replenish essential nutrients with custom IV blends delivered in-spa.',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
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
            Where Wellness Meets Longevity. Where Beauty Meets Science. The Art of Beauty, Wellness & Longevity.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/bookings"
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
                  href="/bookings"
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
            href="/services"
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
    </Box>
  );
}

export default Home;
