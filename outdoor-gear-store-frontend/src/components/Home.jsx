import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Welcome to Outdoor Gear Store
      </Typography>
      <Stack direction="row" spacing={4} justifyContent="center" mt={3}>
        <Button component={Link} to="/categories" variant="contained">
          View Categories
        </Button>
        <Button component={Link} to="/items" variant="outlined">
          View Items
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;