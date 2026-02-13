import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useLanguage } from './LanguageContext';

function Services() {
  const { t } = useLanguage();
  const vagaroRef = useRef(null);

  useEffect(() => {
    if (!vagaroRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqCJWmCpacT3qmV35y79oz34mC2PeFJ4mC30m9dSycvCu7gevEhAJDXwOapcUbfY?v=zoRKOW3HAO8g7BcnUjsbmLyf0rGaoyFB9ragSStFK0y0#';
    script.type = 'text/javascript';
    script.async = true;
    vagaroRef.current.appendChild(script);
  }, []);

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
        <div
          id="frameTitle"
          className="embedded-widget-title"
          style={{
            fontSize: '23px',
            color: '#333',
            fontFamily: 'Arial, Helvetica, sans-serif',
            lineHeight: '24px',
            padding: '18px 10px 8px',
            textAlign: 'center',
            boxSizing: 'border-box',
          }}
        />
        <div
          ref={vagaroRef}
          className="vagaro"
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: 0,
            border: 0,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <style>{`.vagaro a { font-size: 14px; color: #AAA; text-decoration: none; }`}</style>
          <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
          <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
          <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
          <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
        </div>
      </Container>
    </Box>
  );
}

export default Services;
