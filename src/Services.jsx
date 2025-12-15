import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { servicesImageBase } from './data/servicesImageBase.js';

const services = [
  {
    name: 'Botox',
    description:
      'Soften expression lines, smooth fine wrinkles, and refresh your look with precise neuromodulator treatments tailored to your features.',
    benefits: ['Targets frown lines, crow’s feet, forehead lines', 'Minimal downtime, natural finish', 'Personalized dosing for balanced results'],
    image: servicesImageBase[0].src,
  },
  {
    name: 'Dermal Fillers',
    description:
      'Restore volume, refine contours, and enhance definition with hyaluronic-acid fillers customized for your unique profile.',
    benefits: ['Lips, cheeks, chin, jawline balancing', 'Hydrating HA formulas for a soft feel', 'Immediate results with subtle shaping'],
    image: servicesImageBase[1].src,
  },
  {
    name: 'Skin Rejuvenation',
    description:
      'Boost luminosity and even tone with resurfacing and collagen-stimulating treatments designed to revive your complexion.',
    benefits: ['Supports smoother texture and smaller pores', 'Targets sun damage and uneven tone', 'Plans tailored to skin type and goals'],
    image: servicesImageBase[2].src,
  },
  {
    name: 'IV Therapy',
    description:
      'Hydrate, replenish nutrients, and support energy with custom IV drips delivered in a calm, comfortable setting.',
    benefits: ['Supports recovery and immune health', 'Custom blends based on your needs', 'Relaxing, efficient sessions'],
    image: servicesImageBase[3].src,
  },
];

function Services() {
  return (
    <Box component="main" sx={{ backgroundColor: 'background.default' }}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontFamily: '"Rosehot", "Roboto Flex", Arial, sans-serif' }}
        >
          Our Services
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: 760, mx: 'auto', color: 'text.secondary' }}>
          Personalized aesthetic and wellness treatments designed to help you look refreshed, feel
          revitalized, and reach your goals with confidence.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 3, md: 4 },
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
                  height: 220,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                <Typography variant="h5" component="h2" sx={{ fontFamily: '"Rosehot", "Roboto Flex", Arial, sans-serif' }}>
                  {service.name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {service.description}
                </Typography>
                <Box component="ul" sx={{ pl: 3, m: 0, color: 'text.secondary', flexGrow: 1 }}>
                  {service.benefits.map((benefit) => (
                    <Typography key={benefit} component="li" variant="body2" sx={{ mb: 0.5 }}>
                      {benefit}
                    </Typography>
                  ))}
                </Box>
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
      </Container>
    </Box>
  );
}

export default Services;
