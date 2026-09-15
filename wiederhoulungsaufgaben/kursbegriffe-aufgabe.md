# Kursbegriffe und Abkürzungen

Diese Übersicht sammelt die zentralen Begriffe, Abkürzungen und Prinzipien aus dem Backend-Kurs von Woche 1 bis zum 15. September 2026. Recherchiere ihre Bedeutungen selbst und ergänze deine eigenen Notizen.

## Abkürzungen

- API
- URL
- HTTP
- HTTPS
- REST
- CRUD
- JSON
- ESM
- CommonJS
- npm
- REPL
- SQL
- NoSQL
- ORM
- ODM
- ACID
- MVCC
- PK
- FK
- 1NF, 2NF, 3NF
- JWT
- MFA
- 2FA
- TOTP
- OAuth 2.0
- OIDC
- SSO
- CSRF
- XSS
- CORS
- OWASP
- SDK
- SaaS
- DBMS

## Woche 1: Node.js, npm und Express-Grundlagen

- Node.js
- Backend
- Client-Server-Modell
- Event Loop
- Asynchronität
- Modul
- `package.json`
- `package-lock.json`
- `dependencies`
- `devDependencies`
- `node_modules`
- Semantische Versionierung
- Express.js
- Middleware
- Route
- Handler
- statische Route
- dynamische Route
- Routenparameter
- Queryparameter
- `req`
- `res`
- `next()`
- `next(err)`
- JSON-Middleware

## HTTP, APIs und CRUD

- Request
- Response
- HTTP-Methode
- Endpunkt
- Request-Body
- Header
- Statuscode
- `200 OK`
- `201 Created`
- `204 No Content`
- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`
- `500 Internal Server Error`
- REST-Ressource
- `PUT`
- `PATCH`
- 404-Fallback
- zentrale Fehlerbehandlung
- In-Memory-Speicher
- Postman
- Pre-request
- Response-Test

## Datenbanken und Datenmodelle

- Datenbank
- Datenbankserver
- relationale Datenbank
- Tabelle
- Zeile / Datensatz
- Spalte
- Datentyp
- PostgreSQL
- Postgres
- `psql`
- pgAdmin
- MongoDB
- MongoDB Atlas
- Dokument
- Collection
- Mongoose
- Schema
- Model
- Relation
- One-to-Many
- Normalisierung
- Constraint
- `PRIMARY KEY`
- `FOREIGN KEY`
- `UNIQUE`
- `NOT NULL`
- `CHECK`
- `DEFAULT`
- Index
- SQL-Abfrage
- `CREATE DATABASE`
- `CREATE TABLE`
- `INSERT`
- `SELECT`
- `WHERE`
- JOIN
- Transaktion
- Rollback
- JSONB
- Prisma
- Prisma Schema
- Prisma Client
- Prisma Migrate
- Query Builder
- Drizzle

## Authentifizierung und Sessions

- Authentifizierung
- Autorisierung
- Identität
- Passwort-Hash
- Salt
- Hashing
- Argon2id, scrypt, bcrypt
- Brute Force
- Credential Stuffing
- Phishing
- Session
- Session-ID
- Session-Store
- Cookie
- Session-Cookie
- `HttpOnly`
- `Secure`
- `SameSite`
- Session Fixation
- Session Hijacking
- Session-Regeneration
- Session-Timeout
- Sliding Expiration
- Bearer Token
- Passkey
- WebAuthn
- Clerk
- Auth-as-a-Service
- Vendor Lock-in

## JWT und Token-Sicherheit

- JWT-Header
- JWT-Payload
- Claim
- JWT-Signature
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
- Refresh Token
- Token-Rotation
- Token-Widerruf

## API-Sicherheit und CORS

- Angriffsfläche
- Input Validation
- Parsing
- Normalisierung
- Positivliste / Whitelist
- Negativliste / Blacklist
- Injection
- SQL Injection
- NoSQL Injection
- Command Injection
- Broken Object Level Authorization
- Broken Object Property Level Authorization
- Mass Assignment
- Data Minimization
- Rate Limiting
- Unrestricted Resource Consumption
- Sicherheits-Fehlkonfiguration
- Same-Origin-Prinzip
- Origin
- Cross-Origin-Request
- CORS-Header
- Preflight
- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`
- HTTPS/TLS
- Logging
- Monitoring
- Deny by default
- Never trust the client
