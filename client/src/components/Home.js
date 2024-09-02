import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography, Paper, Box } from '@mui/material';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Data List</Typography>
      <Paper elevation={3}>
        <List>
          {data.map(item => (
            <ListItem key={item._id}>
              <ListItemText
                primary={`Name: ${item.name}`}
                secondary={
                  <>
                    <Typography variant="body2">Email: {item.email}</Typography>
                    <Typography variant="body2">Message: {item.message}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Home;
