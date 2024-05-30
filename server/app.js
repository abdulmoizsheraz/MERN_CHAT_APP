import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./utils/connectdb.js";
import userRoutes from "./routes/user.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
const URI = process.env.MONGO_URI;
connectDB(URI);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/user", userRoutes);

// Error Middleware
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
