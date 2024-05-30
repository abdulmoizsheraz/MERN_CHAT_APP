import express from "express";
import { newUser, login , getMyProfile } from "../controllers/user.js";
import { singleAvatar } from "../middlewares/multer.js";
import {isAuthenticated } from "../middlewares/auth.js"
const router = express.Router();

router.post('/new', singleAvatar, newUser);
router.post('/login',singleAvatar, login);

// After this Routes User should be logged In in order to access rest of application for that purpose we are developing middleware auth.js file

router.get('/me',isAuthenticated,getMyProfile );

export default router;
