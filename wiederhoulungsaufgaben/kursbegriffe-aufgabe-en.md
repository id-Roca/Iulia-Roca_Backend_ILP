# Course Terms and Abbreviations

This overview collects the central terms, abbreviations, and principles from the backend course from Week 1 through September 15, 2026. Research their meanings yourself and add your own notes.

## Abbreviations

#### API -> **Application Programming Interface**

Is a software middleman that allows different apps to communicate with each other.

#### URL -> **Uniform Resource Locator**

Is the unique web address used to find and access a specific page, file, or resource on the internet.

#### HTTP -> **Hyper Text Transfer Protocol**

Is the fundational set of rules used to transfer data and load webpages on the Wold Wide Web.

#### HTTPS -> **Hyper Text Transfer Protocol Secure**

It is the secure version of HTTP. It adds an encryption layer using SSL (Secure Sockets Layer) or TLS (Transport Layer Security).

#### REST -> **Representational State Transfer**

In the context of API, REST is a software architectural style that defines a set of rules and guidelines for how computers should communicate with each other over the internet.

#### CRUD -> **Create, Read, Update, Delete**

These are the four basic functions used to manage data in computer programming and databases.

#### JSON -> **JavaScript Object Notation**

Is a lightweight text-based format used to store and transfer structured data.

#### ESM -> **ECMAScript Modules**

In web development ESM is the official standard format for sharing and reusing JavaScript code across files.

```js
// Named export
export const add = (a, b) => a + b;

// Default export
const multiply = (a, b) => a * b;
export default multiply;
```

```js
/// Importing named export and default export
import multiply, { add } from "./math.js";
import express from "express"; // Importing an npm package
import { rateLimit } from "express-rate-limit"; // Named import from package
```

#### CommonJS -> **Common JavaScript**

Is a standard format for organizing and structuring JavaSript code into separate, reusable files (modules) outside the web browser.

Main commands:

- `require()`
- `module.exports`

It is considered an older standard, while ESM is the modern standard. However, node.js still installs the commonJS by default, which is seen in the package.json file when initializing a project.

#### npm -> **Node Package Manager**

It is the standard tool used to share, install, and manage reusable code packages for JavaScript and Node.js projects. It is the world’s largest software registry, containing millions of open-source libraries that developers can use for free.

npm offers Automatic Dependency Management, Version Control & Updates, Easy Team Collaboration, database helpers, web frameworks - which makes it very popular and reliable. Before npm, using a third-party library was more complicated and required checking for updates separately.

#### REPL -> **Read-Eval-Print-Loop**

REPL is an interactive programming environment that takes individual user inputs, evaluates them, and returns the result to the user.

- **Read:** reads the code or command
- **Eval:** evaluates and executest that code
- **Print:** prints the resulting output
- **Loop:** it waits for the next command

```bash
node
```

Once enter is hit, the terminal turns into an interactive playground.

```JavaScript
> 5 + 5
10
> const name = "Backend Dev";
undefined
> name.toUpperCase();
'BACKEND DEV'
/*
const name = "Backend Dev" is a declaration statement: it creates a variable in memory, but the operation itself has no return value. Since nothing is returned, JavaScript defaults to returning undefined. REPL faithfully prints that undefined.

name.toUpperCase() is a method call (expression): it returns the new string 'BACKEND DEV', so REPL prints 'BACKEND DEV'.
*/
```

This allows to execute quick math calculations, test built-in JavaScript functions, or check variable assignments on the fly without needing to create or run a .js file.

#### SQL -> **Structured Query Language**

Is a standard programming language used to communicate with, manage and manipulate **relational** databases.

#### NoSQL -> **Not Only Structured Query Language**

This refers to **non-relational** databases that store data in flexible formats - such as JSON documents of key-value pairs, rather than rigid tables.

#### ORM -> **Object-Relational Mapping**

Is a programming technique that lets developers interact with a relational database using the objects of an object-oriented programming language instead of writing raw SQL queries.

#### ODM -> **Object Data Modeling**

This tool is a library that translates raw data from a non-relational database - like MongoDB - into object instances in the backend code. It allows developers to define strict schemas, run database quieries, and perform input validation directly through object-oriented code without writing manual database commands.

Not to be confused with **Original Design Manufacturer** ... which is a company that designs and build a product that another company brands and sales.

#### ACID -> **Atomicity, Consistency, Isolation, and Durability**

Is a set made of the ACID key properties - that guarantee database transactions are processed reliably and accurately. It ensures that all parts of a data modification either succeed together completely or fail safely without leaving corrupted or incomplete data behind.

#### MVCC -> **Multi Version Currency Controll**

Is a database management method that allows multiple users to read and write data simultaneously without blocking each other. It achieves this by creating point-in-time snapshots of data records, ensuring readers see a consistent state while writers modify separate versions.

#### PK -> **Primary Key**

It is a unique identifier (like an ID number, Universally Unique ID - UUID, or auto-incrementing integer) assigned to a specific record in a database table or collection.

#### FK -> **Foreign Key**

It is a column in one database table that stores the Primary Key (PK) of a record in another table, creating a formal link between them.

#### 1NF, 2NF, 3NF -> **1st, 2nd, and 3rd Normal Forms**

They are a set of rules used in relational database design (Database Normalization) to structure tables properly, eliminate redundant data, and prevent errors when adding or deleting records.

#### JWT -> **JSON Web Tockens**

Is a compact, self-contained standard for securely transmitting verified information between two parties as a digitally signed JSON object. It is commonly used in stateless authentication to verify a user's identity on every request without requiring the server to check a database session each time.

#### MFA -> **Multi Factor Authentification**

Is a security process that requires a user to provide two or more distinct verification factors to gain access to an application or account. Instead of relying solely on a password, it adds extra layers of defense—such as a mobile authenticator app code or fingerprint scan—to prevent unauthorized access even if credentials are stolen.

### 2FA -> **Two Factor Authentification**

A specific subset of MFA that requires exactly two separate form of identity verification before granting system access. It typically combines something the users know (like a password) with something they have (like a phone code) to ensure a compromised password alone isn't enough to breach an account.

#### TOTP -> **Time-based One-Time Password**

It is a temporary, computer-generated passcode—usually 6 digits—that changes every 30 to 60 seconds based on the current time and a shared secret key. It is the core algorithm used by authenticator apps (like Google Authenticator or Authy) for 2FA/MFA.

#### OAuth 2.0 -> **Open Authorization 2.0**

OAuth 2.0 is an industry-standard delegation framework that allows an application to access a user's data on another service without exposing their password. It powers "Log in with Google/GitHub" features and API integrations by using temporary, scoped access tokens instead of user credentials.

#### OIDC -> **OpenID Connect**

It is an identity layer built directly on top of OAuth 2.0 that enables applications to verify the identity of an end-user and obtain basic profile information (like name, email, and avatar) in a standardized format.

#### SSO -> **Single Sign-On**

It is an authentication scheme that allows a user to log in once with a single set of credentials (like an email and password) and gain access to multiple independent applications or systems without needing to log in again for each one.

#### CSRF -> **Cross-Site Request Forgery**

It is a web security vulnerability where a malicious website tricks a user's web browser into making an unwanted, authenticated request to a vulnerable backend where the user is currently logged in.

#### XSS -> **Cross-Site Scripting**

XSS is a client-side code injection vulnerability where an attacker injects malicious JavaScript into a web application, causing victim browsers to execute the script in the context of their own session.

#### CORS -> **Cross-Origin Resource Sharing**

It is a browser-enforced security mechanism that allows or restricts web applications running at one domain (origin) from requesting resources from a server located at a different domain, protocol, or port.

#### OWASP -> **Open Worldwide Application Security Project**

It is a global non-profit foundation dedicated to improving software security through community-led open-source projects, documentation, tools, and standards.

#### SDK -> **Software Development Kit**

A collection of software development tools, libraries, and documentation provided by a vendor to help developers build applications for a specific platform or service.

#### SaaS -> **Software as a Service**

A cloud computing model where applications are hosted by a vendor and delivered to users over the internet as a subscription service.

#### DBMS -> **Database Management System**

Software used to store, manage, retrieve, and organize data in a database efficiently and securely.

## Week 1: Node.js, npm, and Express Fundamentals

- Node.js

An open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code on the backend server outside of a browser.

- Backend

The server-side component of an application responsible for managing data, server logic, database interactions, and API communications.

- Client-server model

A network architecture where client devices (like browsers) send requests and a centralized server processes those requests and returns responses.

- Event Loop

The mechanism in Node.js that handles asynchronous tasks by offloading heavy operations and processing callbacks on a single thread without blocking execution.

- Asynchronous programming

A programming technique that allows a program to start a task (like fetching data) and move on to other work without waiting for that task to finish.

- Module

A self-contained, reusable block of JavaScript code that can export its functionality to be used in other files.

- `package.json`

The core manifest file in a Node.js project containing project metadata, script commands, and the list of installed package dependencies.

- `package-lock.json`

A file automatically generated by npm that records the exact versions of all installed packages and sub-dependencies to ensure reproducible installs.

- `dependencies`

Third-party packages listed in package.json that are strictly required for the application to run in production.

- `devDependencies`

Packages only needed during local development and testing (like linters, compilers, or test runners) that are excluded from production builds.

- `node_modules`

The local directory where package managers download and store all the actual code files for the project's dependencies.

- Semantic versioning

A standardized versioning system (MAJOR.MINOR.PATCH) used to indicate breaking changes, new feature releases, or bug fixes in code libraries.

- Express.js

A minimal, flexible, and fast web application framework for Node.js that simplifies route handling, HTTP requests, and server setup.

- Middleware

Functions that execute sequentially during the request-response cycle to inspect, modify, validate, or terminate incoming requests before reaching the final handler.

Middleware is a general software design pattern used across many frameworks and languages (like Next.js, Fastify, Django in Python, and ASP.NET in C#). In web development, it simply refers to any function or layer that intercept requests on their way between the client and the final route handler.

- Route

A defined combination of an HTTP method and a URL path on a server that specifies how the backend should respond to specific incoming requests.

- Handler

The controller function attached to a route that processes an incoming request and returns a response to the client.

- Static route

A fixed route path (like /about or /contact) that matches an exact URL string without any dynamic variables.

- Dynamic route

A route path containing variable place-holders (like /users/:id) that can accept different parameter values dynamically.

- Route parameters

Variable segments named in a route path (accessed via req.params) used to capture specific identifier values from a URL.

- Query parameters

Optional key-value pairs attached to the end of a URL after a ? (accessed via req.query) primarily used for filtering, searching, or sorting data.

- `req`

The standard parameter object in Express representing the incoming HTTP request from the client (containing headers, body, params, and query strings).

- `res`

The response parameter object in Express used to formulate and send data, status codes, or HTTP responses back to the client.

- `next()`

A callback function in Express middleware that passes execution control to the next middleware function in the stack.

- `next(err)`

A specific call to next() passing an error object, which bypasses normal middleware and jumps straight to Express's error-handling middleware.

- JSON middleware

An Express built-in middleware (express.json()) that parses incoming JSON payloads from the request body and populates req.body.

## HTTP, APIs, and CRUD

- Request

An HTTP message sent by a client (like a browser) to a server asking to retrieve data, send information, or perform an action.

- Response

The HTTP message sent back by a server to the client containing a status code, response headers, and requested data or error details

- HTTP method

A standardized action keyword (like GET, POST, PUT, DELETE) indicating the desired operation to be performed on a target resource.

- Endpoint

A specific URL path provided by an API where a server listens for incoming client requests to interact with a specific resource.

- Request body

The data payload sent along with HTTP requests (commonly in POST, PUT, or PATCH requests) containing information to be created or updated.

- Header

Metadata key-value pairs attached to HTTP requests and responses used to communicate authentication tokens, content types, caching instructions, and server details.

- Status code

A 3-digit numerical code returned by a server indicating the outcome of an HTTP request (e.g., 2xx for success, 4xx for client errors, 5xx for server errors).

- `200 OK`

The standard HTTP status code indicating that a client request succeeded and the server returned the requested data.

- `201 Created`

An HTTP status code indicating that a request succeeded and resulted in a new resource being successfully created on the server.

- `204 No Content`

An HTTP status code indicating that a request succeeded, but the server is deliberately returning an empty response body (commonly used with DELETE).

- `400 Bad Request`

A status code indicating the server cannot process the request due to client-side errors, such as malformed request syntax or invalid JSON payloads.

- `401 Unauthorized`

A status code indicating that the client must authenticate itself to get the requested response (missing or invalid credentials/tokens).

- `403 Forbidden`

A status code indicating that the client is authenticated, but lacks the necessary permissions to access the requested server resource.

- `404 Not Found`

A status code indicating that the server cannot find the requested URL path or resource.

- `500 Internal Server Error`

A status code indicating that the server encountered an unexpected error or unhandled exception while processing the request.

- REST resource

Any piece of data or object (like a user, product, or order) managed by an API that can be referenced and manipulated via a unique URI.

- `PUT`

An HTTP method used to _completely replace_ an existing resource with a new payload, or create it if it does not already exist.

- `PATCH`

An HTTP method used to apply _partial updates_ or modifications to an existing resource on the server without replacing the whole object.

- 404 fallback

A wildcard catch-all route placed at the end of an Express route setup to handle requests made to endpoints that do not exist.

- Central error handling

A unified middleware pattern in Express used to catch, format, and log all application errors in one single place. In Express, the central error handling is a special middleware function with 4 parameters (err, req, res, next).

```JavaScript
// 1. Central error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error on the server

  res.status(err.status || 500).json({
    error: true,
    message: err.message || "Internal Server Error",
  });
});

// 2. Any route can pass errors to it using next(err)
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await findUser(req.params.id);
    if (!user) throw new Error("User not found");
    res.json(user);
  } catch (err) {
    next(err); // Handled by central error middleware above!
  }
});
```

- In-memory storage

Temporarily storing application data directly in the server's RAM (using JavaScript arrays or objects) instead of persisting it in a database.

- Postman

A popular API platform tool used by developers to build, test, document, and debug HTTP API endpoints.

- Pre-request

A Pre-request script is code that runs automatically before Postman fires off an HTTP request. It is most commonly used to generate dynamic data (like timestamps, random emails, or calculated signatures) or to automatically retrieve an authentication token and attach it to the request headers.

- Response test

Automated assertions written in API clients (like Postman) that run after receiving a response to verify status codes, headers, and payload structures.

## Databases and Data Models

- Database

An organized, persistent collection of structured or unstructured data stored electronically on a computer system.

- Database server

A dedicated hardware server or software application that hosts, manages, and executes access to one or more databases.

- Relational database

A database system (like PostgreSQL or MySQL) that organizes data into structured tables linked together by defined relationships and primary/foreign keys.

- Table

A structured set of data elements organized into vertical columns and horizontal rows within a relational database.

- Row / record

A single, horizontal entry within a database table representing a individual, unique data entity.

- Column

A vertical attribute field within a database table that defines a specific data type and value for every record.

- Data type

An explicit constraint set on a database column or programming variable defining what kind of data (e.g., integer, text, boolean, timestamp) it can hold.

- PostgreSQL

A powerful, open-source object-relational database management system known for its strict SQL compliance, reliability, and advanced features.

- Postgres

The widely used shorthand name for PostgreSQL.

- `psql`

The native, terminal-based interactive command-line tool used to run queries and manage PostgreSQL databases.

- pgAdmin

A popular, web-based graphical management tool used to inspect, design, and query PostgreSQL databases visually.

- MongoDB

A popular open-source NoSQL database that stores data as flexible, JSON-like document structures.

- MongoDB Atlas

The fully managed, cloud-hosted database service for running and scaling MongoDB databases without managing underlying infrastructure.

- Document

A single record in a NoSQL database (like MongoDB) formatted as a flexible key-value data structure similar to a JSON object.

- Collection

A grouped set of related MongoDB documents, equivalent to a "table" in a relational database.

- Mongoose

An Object Data Modeling (ODM) library for Node.js and MongoDB that provides schema definitions, validation, and type casting out of the box.

- Schema

A structural layout definition that specifies the fields, data types, constraints, and validation rules for database entries or objects.

- Model

A programmatic wrapper class in an ORM/ODM derived from a schema, providing functions to perform CRUD operations on the underlying database table or collection.

- Relation

A defined connection between two or more tables or documents in a database establishing how individual entities correspond to each other.

- One-to-many

A database relationship where a single record in one table can be associated with multiple records in another table (e.g., one user having many orders).

- Normalization

The process of organizing data in a relational database to reduce data redundancy, eliminate logical anomalies, and improve data integrity.

- Constraint

A rule enforced on database columns (e.g., PRIMARY KEY, NOT NULL) to maintain strict data integrity and quality.

- `PRIMARY KEY`

A constraint that uniquely identifies each record in a relational database table, ensuring no nulls or duplicates exist.

- `FOREIGN KEY`

A constraint that enforces a link between a column in one table and the Primary Key of another table, ensuring referential integrity.

- `UNIQUE`

A database constraint ensuring that all values stored in a specific column are distinct from one another.

- `NOT NULL`

A database rule preventing a specific column from storing empty or null values.

- `CHECK`

A database constraint that evaluates a boolean condition on column values to ensure inserted data falls within acceptable business limits.

- `DEFAULT`

A rule that automatically populates a column with a predefined value if no value is explicitly supplied during an INSERT command.

- Index

A special database data structure that accelerates data retrieval speed on targeted columns at the cost of slightly slower write operations and extra disk usage.

- SQL query

A structured command string written in SQL used to perform database operations like creating, reading, updating, or deleting data.

- `CREATE DATABASE`

The SQL command used to instantiate a new database instance.

- `CREATE TABLE`

The SQL command used to define and create a new table with specified columns and data types inside a database.

- `INSERT`

The SQL command used to add new records or rows into a database table.

- `SELECT`

The SQL query command used to fetch and retrieve specified data fields or records from one or more database tables.

- `WHERE`

A clause used in SQL queries to filter database records so that only rows matching specified criteria are returned or updated

- JOIN

An SQL operation used to combine rows from two or more tables based on a related column between them.

- Transaction

A unit of database operations executed together as a single logical action, ensuring all steps succeed or none are saved (maintaining ACID properties).

- Rollback

The automatic or manual undo operation performed during a database transaction failure to restore data back to its state prior to the transaction's start.

- JSONB

A optimized binary JSON data type in PostgreSQL that allows storing, indexing, and querying unstructured JSON data directly inside relational tables with high performance.

- Prisma

A modern, type-safe ORM for Node.js and TypeScript that simplifies database access, migrations, and schema management.

- Prisma Schema

The central declaration file (schema.prisma) used to define database models, datasources, client generators, and table relations.

- Prisma Client

The auto-generated, type-safe query builder generated by Prisma based on the schema definition to run database operations inside the Node.js code.

- Prisma Migrate

A database migration tool built into Prisma that converts changes in the schema.prisma file into declarative SQL database migrations.

- Query Builder

A library tool (like Knex.js) that lets developers construct SQL queries programmatically using chainable JavaScript method calls rather than raw string queries.

- Drizzle

A lightweight, highly performant TypeScript-first ORM that offers SQL-like query builder syntax with automatic type safety and zero heavy dependencies.

## Authentication and Sessions

- Authentication

The security process of verifying the actual identity of a user, service, or client (e.g., confirming "Are you who you say you are?").

- Authorization

The security process of determining whether an authenticated user has permission to access a specific system resource or perform an action (e.g., "Are you allowed to do this?").

- Identity

The unique representation of an individual user, account, or machine within an IT system (usually backed by an ID, username, or email).

- Password hash

A secure, irreversible mathematical transformation of a plain-text password into a fixed-length string to ensure passwords are never stored in plain text.

- Salt

A random, unique cryptographic string added to a plain-text password before hashing to defend against precomputed lookup tables (rainbow table attacks).

- Hashing

The process of applying a one-way mathematical function to convert arbitrary input data into a fixed-size value that cannot be reversed.

- Argon2id, scrypt, bcrypt

Modern, intentionally slow, memory-hard cryptographic hashing algorithms specifically designed for securely hashing user passwords.

- Brute force

An automated cyberattack method that attempts to guess credentials or secret keys by systematically trying every possible combination of characters.

- Credential stuffing

An automated attack where lists of stolen username/password pairs from past data breaches are injected into other websites to gain unauthorized account access.

- Phishing

A social engineering attack technique where malicious actors trick individuals into revealing sensitive credentials or information through deceptive emails, sites, or messages.

- Session

A temporary server-side record establishing that a specific client has logged in and maintains an active state over multiple HTTP requests.

- Session ID

A unique, random secret string issued by a server to a client upon login, used to identify that client's corresponding session data on subsequent requests.

- Session store

A persistent or fast in-memory database (like Redis or PostgreSQL) used on the server to store active session data associated with session IDs.

- Cookie

A small piece of data sent from a web server and saved automatically by the user's web browser, which is sent back on subsequent requests to the same domain.

- Session cookie

A cookie designed to temporarily hold session identifiers, which automatically expires when the user closes their browser window unless persisted.

- `HttpOnly`

A secure cookie flag that prevents client-side JavaScript code from reading the cookie via document.cookie, mitigating XSS attacks.

- `Secure`

A cookie attribute instructing the browser to only transmit the cookie over encrypted HTTPS connections, preventing interception over plain HTTP.

- `SameSite`

A cookie directive (Strict, Lax, or None) controlling whether cookies are sent along with cross-site requests, acting as a primary defense against CSRF attacks.

- Session fixation

An attack where a perpetrator tricks a victim into authenticating using a pre-determined session ID, allowing the attacker to hijack the session once logged in.

- Session hijacking

An attack where a bad actor steals a user's valid session ID or cookie to gain unauthorized access to their active session without needing their password.

- Session regeneration

The security practice of immediately issuing a brand new Session ID upon user privilege changes (like logging in) to neutralize session fixation threats.

- Session timeout

An enforced security duration after which an inactive user's session automatically expires and requires re-authentication.

- Sliding expiration

An expiration strategy where a session's lifetime is automatically extended every time the user makes an active request before the timeout occurs.

- Bearer token

A type of access token (like a JWT) where access is granted to whoever holds ("bears") the token string in their request's HTTP Authorization header.

- Passkey

A modern, passwordless authentication standard built on WebAuthn using public-key cryptography to enable fast, secure logins via device biometrics or hardware keys.

- WebAuthn

A standardized web API enabling web applications to leverage native device authenticators (like Touch ID, Face ID, or YubiKeys) for secure, phishing-resistant logins.

- Clerk

A popular complete user management and authentication-as-a-service platform for modern full-stack applications.

- Auth-as-a-Service

Cloud services (like Auth0, Clerk, or Firebase Auth) that handle all authentication infrastructure, security, and identity management on behalf of developers.

- Vendor lock-in

The business risk where an application becomes so deeply tied to a specific third-party service or proprietary framework that moving to another provider is costly or difficult.

## JWT and Token Security

- JWT header
- JWT payload
- Claim
- JWT signature
- Base64URL
- JWS
- `HS256`
- `RS256`
- `sub`
- `iss`
- `aud`
- `exp`
- `nbf`
- `iat`
- `jti`
- `jsonwebtoken`
- `jwt.sign()`
- `jwt.verify()`
- `jwt.decode()`
- Refresh token
- Token rotation
- Token revocation

## API Security and CORS

- Attack surface
- Input validation
- Parsing
- Normalization
- Allowlist / whitelist
- Denylist / blacklist
- Injection
- SQL injection
- NoSQL injection
- Command injection
- Broken Object Level Authorization
- Broken Object Property Level Authorization
- Mass assignment
- Data minimization
- Rate limiting
- Unrestricted resource consumption
- Security misconfiguration
- Same-origin principle
- Origin
- Cross-origin request
- CORS headers
- Preflight
- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`
- HTTPS/TLS
- Logging
- Monitoring
- Deny by default
- Never trust the client

## Other abbreviations or terms

#### Metadata

Is "data about data." Instead of being the main content of a message (like the actual JSON user object), metadata provides context about the message—such as how big the payload is, what format it is written in (Content-Type: application/json), or who sent it (Authorization: Bearer token).

#### Edge Cases

Edge Cases are extreme, unusual, or rare scenarios that occur at the far boundaries of an application's expected operating conditions.

While a typical "happy path" assumes users input valid data under normal circumstances, edge cases involve unexpected inputs, hardware limits, or race conditions that test whether a system breaks under pressure.

#### MCP -> **Model Context Protocol**

It is an open-source standard (originally created by Anthropic in late 2024) designed to connect AI applications, agents, and Large Language Models (LLMs) to external tools, databases, and APIs.

#### pnpm -> **Performant Node Package Manager**

It is a fast, disk-space-efficient alternative to npm and yarn that uses a content-addressable store and hard links to avoid duplicating package files across projects.

Key Features:

- **Disk Space Efficiency:** All packages are saved in a single global store on the machine. If 10 projects use lodash, it is stored on disk only once and hard-linked into each project.

- **Non-Monolithic node_modules:** Unlike npm, pnpm creates a strict symlinked structure in node_modules. This prevents "phantom dependencies"—a common bug where code imports packages that were installed as indirect sub-dependencies without being listed in package.json.

- **Built-in Monorepo Support:** Native workspace support allows managing multi-package repositories out of the box without needing external tools.

#### yarn -> **JavaScript package manager**

Yarn is a fast, reliable, and secure JavaScript package manager created by Meta (formerly Facebook) in 2016 as an alternative to npm.

It introduced crucial innovations to the Node.js ecosystem—such as deterministic installations using a lockfile (yarn.lock), parallel package downloads, and offline caching—many of which were later adopted by rival package managers.
