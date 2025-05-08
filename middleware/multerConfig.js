const path = require("path");
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // ✅ Always resolve to the real uploads directory
      const uploadPath = path.join(__dirname, "..", "uploads");
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

const upload = multer({ storage: storage })

module.exports = upload;