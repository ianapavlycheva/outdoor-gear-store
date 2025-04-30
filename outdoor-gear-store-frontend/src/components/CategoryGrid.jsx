import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import axios from "axios";

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/categories") // Ensure this is correct
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <Grid container spacing={3} padding={3}>
      {categories.map((cat) => (
        <Grid item xs={12} sm={6} md={4} key={cat.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={cat.imageURL}
              alt={cat.name}
            />
            <CardContent>
              <Typography variant="h6">{cat.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {cat.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryGrid;