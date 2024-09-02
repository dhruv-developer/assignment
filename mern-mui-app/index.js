const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://dhruv:dd110206@cluster0.rrhia.mongodb.net/mernapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema
const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Data = mongoose.model('Data', dataSchema);

// API Endpoints
app.get('/api/data', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

app.post('/api/data', async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.status(201).json(newData);
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
