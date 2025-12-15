import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const address = '8040 NW 95th Street Suite 224 Hialeah Gardens, FL 33016';
const phone = '(555) 123-4567';
const email = 'hello@livwellness.com';
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

function Contact() {
  return (
    <Box component="main" sx={{ backgroundColor: '#fcf8ee', minHeight: '100vh' }}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: '#f2e8d8',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontFamily: '"Rosehot", "Montserrat", Arial, sans-serif',
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" component="p" sx={{ maxWidth: 760, lineHeight: 1.6 }}>
            Visit our studio or reach out to plan your next appointment. We love creating calm,
            elevated experiences tailored to you.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Stack spacing={2.75}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Visit Us
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  {address}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Hours
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  Mon–Fri: 9am–6pm
                  <br />
                  Sat: 10am–2pm
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Call or Email
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  Phone:{' '}
                  <Link href="tel:5551234567" underline="none" sx={{ color: 'inherit' }}>
                    {phone}
                  </Link>
                  <br />
                  Email:{' '}
                  <Link href={`mailto:${email}`} underline="none" sx={{ color: 'inherit' }}>
                    {email}
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                height: { xs: 320, md: '100%' },
                minHeight: 320,
              }}
            >
              <iframe
                title="LIV Wellness map"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
