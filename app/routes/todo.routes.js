const controller = require("../controllers/todo.controller");

module.exports = (app) => {
  app.get("/todos", controller.getAll);
};
