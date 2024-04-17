const knex = require("knex")(require("../knexfile"));

const getWarehouses = async (_req, res) => {
  try {
    const data = await knex("warehouses");
    const customizedData = data.map((item) => {
      return {
        id: item.id,
        warehouse_name: item.warehouse_name,
        address: item.address,
        city: item.city,
        country: item.country,
        contact_name: item.contact_name,
        contact_position: item.contact_position,
        contact_phone: item.contact_phone,
        contact_email: item.contact_email,
      };
    });
    res.status(200).json(customizedData);
  } catch (err) {
    res.status(400).send(`Error retrieving Warehouses: ${err}`);
  }
};

module.exports = {
  getWarehouses,
};
