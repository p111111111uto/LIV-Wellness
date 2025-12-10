import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NavTabs from './NavTabs';
import logo from './assets/logo.svg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f766e'
    },
    secondary: {
      main: '#f0b429'
    },
    background: {
      default: '#f6f7f8'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Box
          component="header"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 3,
            py: 2,
            bgcolor: 'background.paper',
            position: 'sticky',
            top: 0,
            zIndex: 1
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="LIV Wellness logo"
            sx={{ height: 48, width: 48, objectFit: 'contain' }}
          />
          <NavTabs />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
