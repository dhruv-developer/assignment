import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import Home from './components/Home';
import SubmitForm from './components/SubmitForm';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/submit">Submit Data</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<SubmitForm />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
