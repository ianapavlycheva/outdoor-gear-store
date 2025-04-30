import React from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const Subscription = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'grey.100',
        py: 5,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Stack spacing={2} alignItems="center">
        <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h6">
          Get the latest for your outdoor adventures
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sign up for discounts, news and limited-time offers
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          component="form"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            type="email"
            placeholder="Your email"
            variant="outlined"
            size="small"
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Sign me up
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Subscription;