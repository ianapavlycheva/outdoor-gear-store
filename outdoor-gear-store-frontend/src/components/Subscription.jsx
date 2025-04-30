import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import api from '../services/api';  // Import the custom api service

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Make an API request (assuming there’s an endpoint for subscription)
    api.post('/subscribe', { email })
      .then(() => {
        setSuccess(true);
        setEmail('');
      })
      .catch((err) => {
        console.error("Error subscribing:", err);
        setError("Failed to subscribe. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
          Sign up for discounts, news, and limited-time offers
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            variant="outlined"
            size="small"
            required
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            fullWidth
          >
            {loading ? 'Signing Up...' : 'Sign me up'}
          </Button>
        </Stack>

        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}

        {success && (
          <Typography variant="body2" color="primary">
            You’ve successfully subscribed!
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default Subscription;