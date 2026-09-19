import express from "express";
import companyRoutes from "./routes/companyRoutes.js";
import contactsRoutes from "./routes/contactsRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Middleware to parse incoming JSON in request body
app.use(express.json());

app.use("/api", companyRoutes);
app.use("/api", contactsRoutes);

app.use(notFound);

app.use(errorHandler);

// last method
app.listen(PORT, () => {
  console.log(`Verbindung läuft auf http://localhost:${PORT}`);
});
