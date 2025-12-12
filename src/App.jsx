import './App.css';
import ResponsiveAppBar from './NavTabs.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a86335',
    },
    secondary: {
      main: '#bf8520',
    },
    background: {
      default: '#fcf1e5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
