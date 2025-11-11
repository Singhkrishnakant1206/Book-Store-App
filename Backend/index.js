import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

async function connectDB() {
  try {
    await mongoose.connect(URI); // no options needed
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
}
connectDB();

// Middleware for JSON
app.use(express.json());



// Routes
app.use('/book', bookRoute);
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
