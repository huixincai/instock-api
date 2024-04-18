const router = require("express").Router();
const warehouseController = require("../controllers/warehouse-controller");
const inventoryController = require("../controllers/inventory-controller");

router
  .route("/")
  .get(warehouseController.getWarehouses)
  .post(warehouseController.addWarehouse);
router
  .route("/:id/inventories")
  .get(inventoryController.getWarehouseInventories);

router.route("/:id").delete(warehouseController.deleteWarehouse);

router.route("/:id").get(warehouseController.getOneWarehouse);
router.put("/:id", warehouseController.updateWarehouse);

module.exports = router;
