import './App.css';
import ResponsiveAppBar from './NavTabs.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Services from './Services.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* You can add more routes like /bookings or /about when ready */}
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
