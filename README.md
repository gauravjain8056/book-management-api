# Simple Book Management API

A basic REST API built with Node.js and Express for managing a list of books in memory. Supports CRUD operations.

## Endpoints

* `GET /books`: Get all books.
* `POST /books`: Add a new book (requires JSON body: `{"title": "...", "author": "..."}`).
* `GET /books/:id`: Get a specific book by ID.
* `PUT /books/:id`: Update a book by ID (requires JSON body with fields to update).
* `DELETE /books/:id`: Delete a book by ID.

## How to Run

1.  Ensure Node.js and npm are installed.
2.  Clone the repository (if applicable).
3.  Navigate to the project directory in your terminal.
4.  Install dependencies: `npm install`
5.  Start the server: `node server.js`
6.  API will run at `http://localhost:3000`.

## Testing

Use tools like Postman or `curl` to interact with the API.

**Example (POST new book with curl):**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "Example Book", "author": "John Doe"}' http://localhost:3000/books
