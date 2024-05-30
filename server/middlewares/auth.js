
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { TryCatch } from "../middlewares/error.js";
import  jwt from "jsonwebtoken";
const isAuthenticated = TryCatch((req, res, next) => {
    const token = req.cookies["authToken"];
    if (!token)
      return next(new ErrorHandler("Please login to access this route", 401));
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = decodedData._id;
    next();

  });

  export {isAuthenticated}