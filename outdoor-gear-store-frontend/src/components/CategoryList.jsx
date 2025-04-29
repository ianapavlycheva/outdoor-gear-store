import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <Grid container spacing={3}>
      {categories.map((cat) => (
        <Grid item xs={12} sm={6} md={4} key={cat.id}>
          <Card>
            {/* Картинка, если будет нужна */}
            {cat.imageURL && (
              <CardMedia
                component="img"
                height="140"
                image={cat.imageURL}
                alt={cat.name}
              />
            )}
            <CardContent>
              <Typography variant="h5" component="div">
                {cat.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {cat.description}
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to={`/category/${cat.id}`}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;