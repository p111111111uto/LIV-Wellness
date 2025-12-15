import './App.css';
import ResponsiveAppBar from './NavTabs.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Services from './Services.jsx';
import AboutUs from './AboutUs.jsx';
import Contact from './Contact.jsx';
import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, useLocation } from 'react-router-dom';

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
    fontFamily: 'Roboto Flex, Arial, sans-serif',
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
