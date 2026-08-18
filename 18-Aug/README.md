# Books API

A lightweight Node.js and Express backend providing book availability data via JSON endpoints.

## Project Setup & Usage

1. Install dependencies:
   npm install

2. Start production server:
   npm start

3. Start development server (auto-reload):
   npm run dev

## Endpoints

* `GET /`: Returns a welcome message and backend overview.
* `GET /api/books`: Returns the list of all books in JSON format.

## Package Types: Local vs. Global

* **Local Packages:** Installed per project inside `node_modules` and tracked in `package.json` (e.g., `express`, `nodemon`). This ensures project portability across different environments.
* **Global Packages:** Installed system-wide across the entire computer (e.g., tools found via `npm list -g --depth=0`). They provide CLI commands accessible anywhere in terminal, but are not tied to specific project code bases.

## Task 3: Global vs. Local Packages

* **When is a local package sufficient?** 
  Local packages are sufficient for project-specific tools and libraries (like `express` or `dotenv`). They keep the project self-contained.

* **When is a global package useful?** 
  Global packages are useful for system-wide CLI utilities used across multiple independent projects (like `npm` or `git`).

* **Which variant is best for collaborative projects?** 
  **Local packages** are best for team collaboration. Saving tools in `package.json` guarantees that every developer gets the exact same dependencies and versions upon running `npm install`.


  ## Reflection Questions

### 1. What specific task does your backend perform in this project?
* **Core Function:** Serves as a RESTful HTTP API to manage a book inventory.
* **Data Fetching:** Listens for `GET` requests to retrieve all book records stored in server memory.
* **Data Creation:** Listens for `POST` requests to validate incoming JSON data and dynamically add new book objects to the list.

---

### 2. Why is express a normal dependency, but nodemon is more of a development dependency?
* **`express` (`dependencies`):** Required for production. It acts as the core framework driving HTTP handling, middleware parsing, and routing. Without it, the backend cannot run.
* **`nodemon` (`devDependencies`):** Useful only during local development. It automatically restarts the Node server whenever code changes, saving manual terminal restarts. Production servers do not need or use this feature.

---

### 3. How can you immediately recognize which packages are locally installed in your project?
* **Package File:** Inspect the `dependencies` and `devDependencies` sections of your project's `package.json`.
* **Folder Structure:** Check the top-level subfolders inside the project's local `node_modules/` directory.

---

### 4. What advantages does your chosen directory structure have for a small backend?
* **Separation of Concerns:** Isolates the main application setup (`server.js`), route handlers (`routes/`), and data storage (`data/`) into distinct files and folders.
* **Maintainability:** Makes the codebase easier to read, navigate, and debug as new features or routes are added.

---

### 5. How does the communication between client and backend work specifically for your GET /api/books?
* **Client Request:** The client (`curl`, Postman, or browser) sends an HTTP `GET` request to `http://localhost:4000/api/books`.
* **Server Processing:** Express receives the request, matches the path to the registered router, and pulls the `books` array from `data/books.js`.
* **Server Response:** The backend returns an HTTP `200 OK` status code along with the `books` array serialized as a JSON payload.

---

### 6. What would you improve next if your mini-project were to become a larger backend?
* **Database Integration:** Replace in-memory arrays with a persistent database (such as PostgreSQL or MongoDB) so data persists across server restarts.
* **Validation & Security:** Add input validation libraries (e.g., Zod or Joi) to sanitize incoming POST payloads, and apply security middleware like CORS and Helmet.
* **Global Error Handling:** Implement centralized Express error middleware to handle unexpected errors without crashing the server.
* **Automated Testing:** Add unit and integration tests using frameworks like Jest and Supertest to verify endpoint stability.