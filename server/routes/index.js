const Router = require("express");
const router = new Router();
const leagueRouter = require("./leagueRouter");
const teamRouter = require("./teamRouter");
const playerRouter = require("./playerRouter");
const matchRouter = require("./matchRouter");
const videoRouter = require("./videoRouter");
const tourRouter = require("./tourRouter");

router.use("/league", leagueRouter);
router.use("/team", teamRouter);
router.use("/player", playerRouter);
router.use("/match", matchRouter);
router.use("/video", videoRouter);
router.use("/tour", tourRouter);

module.exports = router;