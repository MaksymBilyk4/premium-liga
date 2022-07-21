const Router = require("express");
const router = new Router();
const tourController = require("../controllers/tourController");

router.post('/', tourController.create);
router.get('/:id', tourController.getOne);
router.get('/', tourController.getAll);

module.exports = router;