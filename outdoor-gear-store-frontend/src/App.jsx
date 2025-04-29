import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import CategoryList from './components/CategoryList';
import CategoryDetails from './components/CategoryDetails';
import Header from './components/Header';

function App() {
  return (
    <Router>
            <Header />
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Outdoor Gear Store
        </Typography>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;