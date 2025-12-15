import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const sections = [
  {
    title: 'Signature Brand',
    body: [
      'LIV Wellness & Aesthetics is a luxury wellness and aesthetic studio dedicated to delivering natural, refined results through advanced medical treatments, longevity-focused therapies, and personalized care. Our soft-nude aesthetic reflects our philosophy: beauty should feel effortless, balanced, and timeless. At LIV, we elevate your wellness, enhance your beauty, and empower you to live confidently—inside and out.',
    ],
  },
  {
    title: 'About the Experience',
    body: [
      'At LIV Wellness & Aesthetics, every detail is designed to reflect calm, softness, and luxury. From our soft nude palette to our curated treatment plans, we create a transformative environment that honors your individuality and enhances your natural beauty.',
      'Our treatments rejuvenate at every level—skin, body, and cellular health—so you can age gracefully, vibrantly, and beautifully. We believe beauty is a lifestyle, and wellness is the foundation.',
    ],
  },
  {
    title: 'Brand Story',
    body: [
      'LIV Wellness & Aesthetics was created with one purpose: to elevate the way people experience self-care. Built on the philosophy that wellness and beauty are inseparable, LIV offers a space where clients can restore, rejuvenate, and rediscover themselves through advanced, evidence-based care.',
      'Every detail—from the color palette to the treatment selection—was designed to reflect serenity, sophistication, and long-lasting transformation. Here, aging is not feared. It is embraced. And enhanced.',
    ],
  },
  {
    title: 'Who We Are',
    body: [
      'LIV Wellness & Aesthetics is a luxury wellness studio specializing in advanced facial rejuvenation, body optimization, and longevity services. We believe true beauty begins with balance—within your skin, your body, and your lifestyle.',
      'With state-of-the-art treatments, including TriLift (TM), Morpheus8, IV wellness drips, hormone optimization, and metabolic programs, we curate individualized journeys that bring harmony to your health and elegance to your appearance.',
    ],
  },
  {
    title: 'Vision Statement',
    body: [
      'Our vision is to redefine the standard of beauty and wellness by creating a space where science and elegance merge seamlessly. We aspire to empower every client to embrace aging with confidence, vitality, and grace—guided by treatments that enhance natural beauty and extend overall well-being.',
    ],
  },
  {
    title: 'Mission Statement',
    body: [
      'At LIV Wellness & Aesthetics, our mission is to elevate the way you experience beauty and wellness. We blend advanced medical aesthetics with modern longevity medicine to help you look, feel, and live your best. Our focus is timeless results, personalized care, and a luxury environment designed to nourish confidence from the inside out.',
    ],
  },
];

function AboutUs() {
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
              fontFamily: '"Rosehot", "Roboto Flex", Arial, sans-serif',
            }}
          >
            About LIV Wellness & Aesthetics
          </Typography>
          <Typography variant="h6" component="p" sx={{ maxWidth: 760, lineHeight: 1.6 }}>
            A soft, luxurious space where science-led wellness meets timeless beauty. Every touchpoint
            is crafted to help you feel calm, confident, and authentically you.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={{ xs: 4, md: 5 }}>
          {sections.map((section) => (
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
