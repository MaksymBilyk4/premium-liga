const Router = require("express");
const router = new Router();
const contactsController = require("../controllers/contactsController");

router.post('/', contactsController.create);
router.get('/', contactsController.getAll);

module.exports = router;