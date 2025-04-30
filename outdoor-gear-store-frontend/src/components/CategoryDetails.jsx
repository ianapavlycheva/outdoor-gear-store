import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';
import api from '../services/api';

const CategoryDetails = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/categories/${id}`)
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
    return <CircularProgress />;
  }

  if (!category) {
    return <Typography>Category not found</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>{category.name}</Typography>
      <Typography variant="body1" gutterBottom>{category.description}</Typography>
      <img src={category.imageURL} alt={category.name} style={{ width: '100%', maxWidth: 600 }} />
    </Container>
  );
};

export default CategoryDetails;