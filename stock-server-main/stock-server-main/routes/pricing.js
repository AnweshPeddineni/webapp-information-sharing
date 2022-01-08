const express = require("express");
const router = express.Router();

// route middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const { create, list, remove } = require("../controllers/pricing");

// routes
router.post("/pricing", authCheck, adminCheck, create);
router.get("/pricings", list);
router.delete("/pricing/:pricingId", authCheck, adminCheck, remove);

module.exports = router;
