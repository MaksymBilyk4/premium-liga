const Router = require("express");
const router = new Router();
const leagueRouter = require("./leagueRouter");
const teamRouter = require("./teamRouter");
const playerRouter = require("./playerRouter");
const matchRouter = require("./matchRouter");
const videoRouter = require("./videoRouter");
const tourRouter = require("./tourRouter");
const contactRouter = require("./contactRouter");

router.use("/league", leagueRouter);
router.use("/team", teamRouter);
router.use("/player", playerRouter);
router.use("/match", matchRouter);
router.use("/video", videoRouter);
router.use("/tour", tourRouter);
router.use("/contact", contactRouter);

module.exports = router;