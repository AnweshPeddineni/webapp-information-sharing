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
} = require("../controllers/transaction");

// routes
router.post("/transaction/new", authCheck, create);
router.get("/:u_id/transactions", list);
router.get("/transaction/all", getAll);
// router.get("/:u_id/leagues/count", getCount);
// router.post("/:u_id/leagues", listPerPage);
router.get("/transaction/:id", read);
router.put("/transaction/:id", authCheck, update);
router.delete("/transaction/:id", authCheck, remove);
// router.get("/league/:id/teams", authCheck, listTeams);

module.exports = router;
