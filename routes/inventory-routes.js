const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router
  .route("/inventories")
  .get(inventoryController.getAllInventories);

module.exports = router;
