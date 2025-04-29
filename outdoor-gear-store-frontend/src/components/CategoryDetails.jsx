import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Container, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const CategoryDetails = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3002/api/categories/${id}`)
      .then((response) => {
        setCategory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching category:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (!category) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography variant="h6" color="error">
          Category not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Card>
        {category.imageURL && (
          <CardMedia
            component="img"
            height="300"
            image={category.imageURL}
            alt={category.name}
          />
        )}
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {category.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {category.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CategoryDetails;