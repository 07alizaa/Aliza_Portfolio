const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB - The Digital Sketchbook'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic Routes
app.get('/', (req, res) => {
  res.send('Aliza Portfolio API - The Backend Canvas is Live!');
});

// Models (Defined inline for simplicity, or can be moved to models/)
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', MessageSchema);

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  image: String,
  github: String,
  live: String,
  category: String
});
const Project = mongoose.model('Project', ProjectSchema);

// API Endpoints
app.post('/api/contact', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: 'Message sent with a gold sparkle!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server painting on port ${PORT}`);
});
