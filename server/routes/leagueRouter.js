const Router = require("express");
const router = new Router();
const leagueController = require("../controllers/leagueController");

router.post('/', leagueController.create);
router.get('/:id', leagueController.getOne);
router.get('/', leagueController.getAll);

module.exports = router;