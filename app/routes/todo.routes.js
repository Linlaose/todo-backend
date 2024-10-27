const Router = require("express");
const controller = require("../controllers/todo.controller");

const router = Router();

router.get("/", controller.getAll);
router.post("/", controller.addTodo);
router.put("/:id", controller.updateTodo);

module.exports = router;
