import config from "../config/db.config.js";
import { Sequelize } from "sequelize";
import todoModel from "./todo.model.js";
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: config.pool,
  define: {
    freezeTableName: true,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = todoModel(sequelize, Sequelize);

export default db;
