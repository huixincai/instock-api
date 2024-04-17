const { get } = require("../routes/warehouse-routes");

const knex = require("knex")(require("../knexfile"));

const getWarehouseInventories = async (req, res) => {
  const warehouseId = req.params.id;
  try {
    const data = await knex("inventories").where("warehouse_id", warehouseId);
    const customizedData = data.map((item) => {
      return {
        id: item.id,
        item_name: item.item_name,
        category: item.category,
        status: item.status,
        quantity: item.quantity,
      };
    });
    res.status(200).json(customizedData);
  } catch (err) {
    res.status(400).send(`Error retrieving Inventories: ${err}`);
  }
};

const getAllInventories = async (req, res) => {
  try {
    const data = await knex("inventories")
      .join("warehouses", "inventories.warehouse_id", "warehouses.id")
      .select(
        "inventories.id",
        "warehouses.warehouse_name",
        "inventories.item_name",
        "inventories.description",
        "inventories.category",
        "inventories.status",
        "inventories.quantity"
      );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(`Unable to retrieve inventory data: ${err}`);
  }
}



const getInventory = async (req, res) => {
  const inventoryId = req.params.id;
  try {
    const data = await knex("inventories")
      .join("warehouses", "inventories.warehouse_id", "warehouses.id")
      .select(
        "inventories.id",
        "warehouses.warehouse_name",
        "inventories.item_name",
        "inventories.description",
        "inventories.category",
        "inventories.status",
        "inventories.quantity"
      )
      .where("inventories.id", inventoryId)
      .first();
    if (!data) {
      return res.status(404).json({ message: "Inventory ID not found" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(`Unable to retrieve inventory data: ${err}`);
  }
};

module.exports = {
  getWarehouseInventories,
  getAllInventories,
  getInventory
};
