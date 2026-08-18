import 'dotenv/config'; // Loads variables from .env into process.env
import express from 'express';
import bookRoutes from './routes/books.js';

const app = express();

// Use PORT from .env, or fallback to 3000 if PORT is missing
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Books API!');
});

app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});