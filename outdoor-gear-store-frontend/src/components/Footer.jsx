import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.200',
        py: 2,
        px: 4,
        mt: 'auto',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Outdoor Gear Store. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;