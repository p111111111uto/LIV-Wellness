import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './assets/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { language, setLanguage, t } = useLanguage();

  const pages = [
    { label: t.nav.services, href: '/services' },
    { label: t.nav.bookings, href: '/bookings' },
    { label: t.nav.contact, href: '/contact' },
    { label: t.nav.aboutUs, href: '/aboutus' },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'palette.primary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* DESKTOP LOGO */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="LIV Wellness"
              sx={{ height: 100, mr: 1 }}
            />
          </Box>

          {/* MOBILE LOGO */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              alignItems: 'center',
              justifyContent: 'flex-start',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="LIV Wellness"
              sx={{ height: 90 }}
            />
          </Box>

          {/* MOBILE LANGUAGE TOGGLE + MENU ICON */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 0.5,
            }}
          >
            <Button
              size="small"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              sx={{
                color: 'white',
                minWidth: 'auto',
                fontSize: '0.8rem',
                textTransform: 'none',
                border: '1px solid rgba(255,255,255,0.4)',
                px: 1,
              }}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(({ label, href }) => (
                <MenuItem
                  key={href}
                  component={RouterLink}
                  to={href}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: 'center' }}>{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* DESKTOP MENU ITEMS */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 2,
            }}
          >
              {pages.map(({ label, href }) => (
                <Button
                  key={href}
                  component={RouterLink}
                  to={href}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                  color: 'white',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                {label}
              </Button>
            ))}
            <Button
              size="small"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              sx={{
                color: 'white',
                minWidth: 'auto',
                textTransform: 'none',
                fontSize: '0.95rem',
                border: '1px solid rgba(255,255,255,0.4)',
                px: 1.5,
                ml: 1,
              }}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
