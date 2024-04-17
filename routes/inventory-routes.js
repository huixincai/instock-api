const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router
  .route("/")
  .get(inventoryController.getAllInventories);


router
  .route("/:id")
  .get(inventoryController.getInventory);

module.exports = router;
