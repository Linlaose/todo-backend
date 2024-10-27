const db = require("../model");
const Todos = db.todos;

exports.getAll = async (req, res) => {
  try {
    const todos = await Todos.findAll();
    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};
exports.addTodo = async (req, res) => {
  try {
    const todo = await Todos.create(req.body);
    res.status(200).json({ data: todo });
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
    res.status(200).json({ data: todo });
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
