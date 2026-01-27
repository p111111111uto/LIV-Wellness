import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { servicesImageBase } from './data/servicesImageBase.js';
import { useLanguage } from './LanguageContext';

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

function Services() {
  const { t } = useLanguage();

  const services = t.services.items.map((item, i) => ({
    ...item,
    image: servicesImageBase[i].src,
  }));

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
          sx={{ fontFamily: '"Rosehot", "Montserrat", Arial, sans-serif' }}
        >
          {t.services.pageTitle}
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: 760, mx: 'auto', color: 'text.secondary' }}>
          {t.services.pageSubtitle}
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
                <Typography variant="h5" component="h2" sx={{ fontFamily: '"Rosehot", "Montserrat", Arial, sans-serif' }}>
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
                  variant="outlined"
                  component={RouterLink}
                  to="/bookings"
                  sx={{ ...outlinedButtonSx, alignSelf: 'flex-start', mt: 'auto' }}
                >
                  {t.services.bookYour} {service.name} {t.services.appointment}
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
