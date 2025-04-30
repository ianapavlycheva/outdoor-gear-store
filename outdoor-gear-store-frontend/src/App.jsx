import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import CategoryList from './components/CategoryList';
import CategoryDetails from './components/CategoryDetails';
import Header from './components/Header';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
import Home from './components/Home';
import CategoryGrid from './components/CategoryGrid';
import ItemGrid from './components/ItemGrid';

function App() {
  return (
    <Router>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryGrid />} />
          <Route path="/items" element={<ItemGrid />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
          {/* Catch-all route for undefined routes */}
          <Route
            path="*"
            element={
              <Typography variant="h6" color="error">
                Page not found.
              </Typography>
            }
          />
        </Routes>
      </Container>
      <Subscription />
      <Footer />
    </Router>
  );
}

export default App;