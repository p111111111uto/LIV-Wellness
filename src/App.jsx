import './App.css';
import ResponsiveAppBar from './NavTabs.jsx';
import Home from './Home.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
      <Home />
    </ThemeProvider>
  );
}

export default App;
