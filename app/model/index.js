const config = require("../config/db.config");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: config.pool,
});
module.exports = {
  sequelize,
};
