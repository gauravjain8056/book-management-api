const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

let books = [];
let nextId = 1; // To automatically assign IDs

// GET /books: Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST /books: Add a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id: Update a book by ID
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ error: "Book not found." });
  }

  if (title) {
    books[bookIndex].title = title;
  }
  if (author) {
    books[bookIndex].author = author;
  }

  res.json(books[bookIndex]);
});

// DELETE /books/:id: Remove a book
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const initialLength = books.length;
  books = books.filter((book) => book.id !== bookId);

  if (books.length < initialLength) {
    res.status(204).send(); // No content, successful deletion
  } else {
    res.status(404).json({ error: "Book not found." });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
