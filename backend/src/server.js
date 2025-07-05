import express from 'express';
import "dotenv/config";
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import path from 'path';


import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import chatRoutes from './routes/chat.route.js';



import { connectDB } from './lib/db.js';


const app = express();
const PORT = process.env.PORT;

// const __dirname = path.resolve();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
     "https://streamify-hslq.vercel.app"
    ],
    credentials: true,   //allow frontend to access cookies
  })
);
app.use(express.json());
app.use(cookieParser());

// Importing routes

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chat' , chatRoutes);

// // Serve static files from the frontend build directory
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
//   // Serve the index.html file for any other routes
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
//   });
// }

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
