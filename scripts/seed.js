const { faker } = require("@faker-js/faker");
const db = require("../app/model");
const Todos = db.todos;

const seedTodos = async () => {
  const todos = [];
  for (let i = 0; i < 100; i++) {
    todos.push({
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      is_done: faker.datatype.boolean(),
      created_at: faker.date.past(),
    });
  }
  try {
    await Todos.bulkCreate(todos);
    console.log("Seed data inserted");
  } catch (error) {
    console.error(error);
  }
};
try {
  seedTodos();
} catch (error) {
  console.error(error);
}
