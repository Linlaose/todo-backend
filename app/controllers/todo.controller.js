const db = require("../model");
const Todos = db.todos;

exports.getAll = async (req, res) => {
  try {
    const { order_by, ...query } = req.query;
    const where = Object.entries(query).reduce((acc, [key, value]) => {
      if (value === "true") return { ...acc, [key]: true };
      if (value === "false") return { ...acc, [key]: false };
      return { ...acc, [key]: value };
    }, {});
    if (!order_by)
      return res.status(400).json({ message: "order_by is required" });
    const [column, direction] = order_by.trim().split(" ");
    const todos = await Todos.findAll({
      order: [[column, direction.toUpperCase()]],
      where,
    });
    res
      .status(200)
      .json({ message: "Todos fetched successfully", data: todos });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.addTodo = async (req, res) => {
  try {
    const todo = await Todos.create(req.body);
    res.status(200).json({ message: "Todo created successfully", data: todo });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.updateTodo = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ message: "Body is empty" });
      return;
    }
    const todo = await Todos.findOne({ where: { id: req.params.id } });
    await todo.update({ ...req.body });
    res.status(200).json({ message: "Todo updated successfully", data: todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400).json({ message: "id is required" });
      return;
    }
    await Todos.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
