import express from "express"
import { newUser } from "../controllers/user.js";
import { multerUploads } from "../middlewares/multer.js";
const app = express.Router();

app.post('/new',multerUploads, newUser);


export default app