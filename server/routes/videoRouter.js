const Router = require("express");
const router = new Router();
const videoController = require("../controllers/videoController");

router.post('/', videoController.create);
router.get('/:id', videoController.getOne);
router.get('/', videoController.getAll);

module.exports = router;