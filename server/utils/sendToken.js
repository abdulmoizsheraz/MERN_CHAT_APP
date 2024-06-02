import jwt from "jsonwebtoken";
// This Configuration is for In case you are testing Locally on Postman etc
 const cookieOptions = {
  domain: "localhost",      
  path: "/",          
  httpOnly: true,          
  sameSite: 'None',        
};


const sendToken = (res, user, code, message) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  
    return res.status(code).cookie("authToken", token, cookieOptions).json({
      success: true,
      message,
    });
    
  };
  
  export {sendToken,cookieOptions}