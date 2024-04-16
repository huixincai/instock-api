const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.route("/").get(inventoryController.getInventories);
router.route("/:id");

module.exports = router;
