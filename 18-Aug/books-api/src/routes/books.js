import express from 'express';
import { books } from '../data/books.js';

const router = express.Router();

// GET route to fetch all books
router.get('/api/books', (req, res) => {
  res.json(books);
});

// POST route to add a new book
router.post('/api/books', (req, res) => {
  // Guard against missing request body
  if (!req.body) {
    return res.status(400).json({ error: 'Request body is missing' });
  }

  const { title, author } = req.body;

  // Validation check for required fields
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  // Create new book entry
  const newBook = {
    id: books.length + 1,
    title,
    author,
    available: true
  };

  // Save to in-memory array
  books.push(newBook);

  // Return success response
  res.status(201).json(newBook);
});

// Always export default at the bottom of the file
export default router;