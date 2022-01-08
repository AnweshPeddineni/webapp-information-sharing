const express = require("express");
const router = express.Router();

// route middlewares
const { authCheck } = require("../middlewares/auth");

// controllers
const {
  create,
  read,
  update,
  remove,
  list,
  getAll,
} = require("../controllers/stock");

// routes
router.post("/stock/new", authCheck, create);
router.get("/:u_id/stocks", list);
router.get("/stock/all", getAll);
// router.get("/:u_id/leagues/count", getCount);
// router.post("/:u_id/leagues", listPerPage);
router.get("/stock/:id", read);
router.put("/stock/:id", authCheck, update);
router.delete("/stock/:id", authCheck, remove);
// router.get("/league/:id/teams", authCheck, listTeams);

module.exports = router;
