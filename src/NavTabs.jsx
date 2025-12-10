import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('about-us');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="navigation tabs"
        centered
        sx={{
          '& .MuiTab-root': { fontWeight: 700, textTransform: 'none', minHeight: 48 },
          '& .MuiTabs-indicator': { height: 3, borderRadius: 2 },
          minHeight: 48
        }}
      >
        <Tab value="about-us" label="About Us" />
        <Tab value="services" label="Services" />
        <Tab value="schedule-appointment" label="Schedule Appointment" />
      </Tabs>
    </Box>
  );
}
