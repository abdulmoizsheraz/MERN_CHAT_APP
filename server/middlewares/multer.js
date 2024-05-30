import multer from "multer";


 const multerUploads = multer({limits:{
    fileSize: 1024 * 1024 * 2
}});
export {multerUploads}