import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import api from "../services/api";  // Import the custom api service

const ItemGrid = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);  // Handle loading state
  const [error, setError] = useState(null);  // Handle error state

  useEffect(() => {
    // Use api service for fetching data
    api.get("/items")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setError("Failed to fetch items.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Typography variant="h6" align="center">Loading items...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" align="center" color="error">{error}</Typography>;
  }

  return (
    <Grid container spacing={3} padding={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardMedia component="img" height="140" image={item.imageURL} alt={item.name} />
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">{item.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemGrid;