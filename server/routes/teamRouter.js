const Router = require("express");
const router = new Router();
const teamController = require("../controllers/teamController");

router.post('/', teamController.create);
router.get('/:id', teamController.getOne);
router.get('/', teamController.getAll);

module.exports = router;