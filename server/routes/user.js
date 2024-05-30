import express from "express"
import { newUser,LoginUser } from "../controllers/user.js";
import {singleAvatar} from "../middlewares/multer.js"
const app = express.Router();

app.post('/new',singleAvatar, newUser);
app.post('/login' , LoginUser)


export default app