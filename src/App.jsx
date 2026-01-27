import './App.css';
import ResponsiveAppBar from './NavTabs.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Services from './Services.jsx';
import AboutUs from './AboutUs.jsx';
import Contact from './Contact.jsx';
import Bookings from './Bookings.jsx';
import CookieConsent from './CookieConsent.jsx';
import PrivacyNotice from './PrivacyNotice.jsx';
import AccessibilityWidget from './AccessibilityWidget.jsx';
import { LanguageProvider } from './LanguageContext.jsx';
import { AccessibilityProvider } from './AccessibilityContext.jsx';
import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { useAccessibility } from './AccessibilityContext.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#613C20',
    },
    secondary: {
      main: '#95825b',
    },
    background: {
      default: '#fcf8ee',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { settings } = useAccessibility();

  return (
    <MotionConfig reducedMotion={settings.pauseAnimations ? 'always' : 'never'}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <CookieConsent />
        <AccessibilityWidget />
      </ThemeProvider>
    </MotionConfig>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <AppContent />
      </AccessibilityProvider>
    </LanguageProvider>
  );
}

export default App;
