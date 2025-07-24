import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cameraRoutes from './routes/cameraRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/camera', cameraRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(5000, () => {
      console.log('🚀 Server running on http://localhost:5000');
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
