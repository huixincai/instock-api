const router = require("express").Router();
const warehouseController = require("../controllers/warehouse-controller");

router.route("/").get(warehouseController.getWarehouses);
router.route("/:id");

module.exports = router;
