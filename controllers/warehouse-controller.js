const knex = require("knex")(require("../knexfile"));

const getWarehouses = async (_req, res) => {
  try {
    const data = await knex("warehouses");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Warehouses: ${err}`);
  }
};

module.exports = {
  getWarehouses,
};
