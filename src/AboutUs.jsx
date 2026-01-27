import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLanguage } from './LanguageContext';

function AboutUs() {
  const { t } = useLanguage();

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
            {t.aboutUs.pageTitle}
          </Typography>
          <Typography variant="h6" component="p" sx={{ maxWidth: 760, lineHeight: 1.6 }}>
            {t.aboutUs.pageSubtitle}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={{ xs: 4, md: 5 }}>
          {t.aboutUs.sections.map((section) => (
            <Box key={section.title}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: 700, mb: 1 }}
              >
                {section.title}
              </Typography>
              {section.body.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{ mt: idx === 0 ? 1.5 : 1.25, lineHeight: 1.8 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default AboutUs;
