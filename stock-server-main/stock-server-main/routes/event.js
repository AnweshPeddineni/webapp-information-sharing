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
} = require("../controllers/event");

// routes
router.post("/event/new", authCheck, create);
router.get("/:u_id/events", list);
router.get("/event/all", getAll);
// router.get("/:u_id/leagues/count", getCount);
// router.post("/:u_id/leagues", listPerPage);
router.get("/event/:id", read);
router.put("/event/:id", authCheck, update);
router.delete("/event/:id", authCheck, remove);
// router.get("/league/:id/teams", authCheck, listTeams);

module.exports = router;
