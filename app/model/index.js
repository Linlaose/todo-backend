const config = require("../config/db.config");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: config.pool,
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todo.model.js")(sequelize, Sequelize);
module.exports = db;
