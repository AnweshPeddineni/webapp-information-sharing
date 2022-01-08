const express = require("express");
const router = express.Router();
const multer = require("multer");

// route middlewares
const { authCheck } = require("../middlewares/auth");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

// controllers
const {
  create,
  read,
  update,
  remove,
  list,
  getAll,
} = require("../controllers/blog");

// routes
router.post("/blog/new", authCheck, create, upload.single("image"));
router.get("/:u_id/blogs", list);
router.get("/blog/all", getAll);
router.get("/blog/:id", read);
router.put("/blog/:id", authCheck, update);
router.delete("/blog/:id", authCheck, remove);
module.exports = router;
