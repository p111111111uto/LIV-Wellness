import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import logo from './assets/logo.png';
import { useLanguage } from './LanguageContext';

function Footer() {
  const { language } = useLanguage();
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 4, md: 6 },
        py: { xs: 5, md: 6 },
        px: { xs: 3, md: 6 },
        backgroundColor: '#2f3e33',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontFamily: '"Rosehot", "Montserrat", Arial, sans-serif', fontSize: '2rem' }}
            >
              CONTACT
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Phone:{' '}
              <Link href="tel:5551234567" underline="none" sx={{ color: 'inherit' }}>
                (555) 123-4567
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Address: 8040 NW 95th Street Suite 224 Hialeah Gardens, FL 33016
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Email:{' '}
              <Link href="mailto:hello@livwellness.com" underline="none" sx={{ color: 'inherit' }}>
                hello@livwellness.com
              </Link>
            </Typography>
            <Typography variant="body1">Hours: Mon–Fri 9am–6pm, Sat 10am–2pm</Typography>
            <Link
              component={RouterLink}
              to="/privacy"
              underline="hover"
              sx={{ color: 'inherit', mt: 2, display: 'inline-block' }}
            >
              {language === 'en' ? 'Privacy Notice' : 'Aviso de Privacidad'}
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="LIV Wellness & Aesthetics logo"
              sx={{ height: { xs: 100, md: 180 }, objectFit: 'contain' }}
            />
          </Box>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 4, color: 'rgba(255,255,255,0.8)' }}>
          © {new Date().getFullYear()} LIV Wellness & Aesthetics. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
