import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true);
    }
  }, []);

  const handleResponse = (value) => {
    localStorage.setItem('cookieConsent', value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2,
              px: 3,
              py: 2,
              bgcolor: 'primary.main',
              color: '#fff',
            }}
          >
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              This site uses cookies to enhance your experience.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleResponse('accepted')}
                sx={{
                  bgcolor: '#fff',
                  color: 'primary.main',
                  '&:hover': { bgcolor: '#e0e0e0' },
                }}
              >
                Accept
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleResponse('declined')}
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  '&:hover': { borderColor: '#e0e0e0', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                Decline
              </Button>
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
