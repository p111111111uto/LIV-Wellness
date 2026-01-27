import { useState } from 'react';
import {
  Fab,
  Drawer,
  Box,
  Typography,
  IconButton,
  Switch,
  Slider,
  Button,
  Divider,
} from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useAccessibility } from './AccessibilityContext';
import { useLanguage } from './LanguageContext';

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const { settings, updateSetting, resetAll } = useAccessibility();
  const { t } = useLanguage();
  const a = t.accessibility;

  const toggles = [
    { key: 'highContrast', label: a.highContrast },
    { key: 'textSpacing', label: a.textSpacing },
    { key: 'pauseAnimations', label: a.pauseAnimations },
    { key: 'dyslexiaFont', label: a.dyslexiaFont },
    { key: 'largeCursor', label: a.largeCursor },
  ];

  return (
    <>
      <Fab
        color="primary"
        aria-label={a.title}
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 1400,
        }}
      >
        <AccessibilityNewIcon />
      </Fab>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 320, p: 3 } } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            {a.title}
          </Typography>
          <IconButton onClick={() => setOpen(false)} aria-label={a.close}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography gutterBottom>{a.fontSize}</Typography>
        <Slider
          value={settings.fontSize}
          onChange={(_, v) => updateSetting('fontSize', v)}
          min={0.8}
          max={1.5}
          step={0.1}
          valueLabelDisplay="auto"
          valueLabelFormat={v => `${Math.round(v * 100)}%`}
          aria-label={a.fontSize}
          sx={{ mb: 3 }}
        />

        {toggles.map(({ key, label }) => (
          <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
            <Typography>{label}</Typography>
            <Switch
              checked={settings[key]}
              onChange={(_, v) => updateSetting(key, v)}
              slotProps={{ input: { 'aria-label': label } }}
            />
          </Box>
        ))}

        <Divider sx={{ my: 2 }} />

        <Button
          variant="outlined"
          startIcon={<RestartAltIcon />}
          onClick={resetAll}
          fullWidth
        >
          {a.resetAll}
        </Button>
      </Drawer>
    </>
  );
}
