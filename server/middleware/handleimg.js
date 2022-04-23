const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb("JPEG and PNG only supported", false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/");
  },
  filename: function (req, file, cb) {
    console.log("vcc");
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limts: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
module.exports = upload;
