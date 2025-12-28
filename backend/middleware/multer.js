import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;

// import multer from "multer";
// import fs from "fs";

// if (!fs.existsSync("uploads")) {
//   fs.mkdirSync("uploads");
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "uploads");
//   },
//   filename: function (req, file, callback) {
//     const uniqueName = Date.now() + "-" + file.originalname;
//     callback(null, uniqueName);
//   },
// });

// const upload = multer({ storage });

// export default upload;
