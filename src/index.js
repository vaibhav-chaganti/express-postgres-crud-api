import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(express.json());
app.use(cors());

// Automatically create table on server startup
createUserTable();

// Routes
app.use("/api", userRoutes);

// Testing POSTGRES Connection
app.get("/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).send("Database connection failed");
  }
});

// Error handling middleware
app.use(errorHandler);

// Server running
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});