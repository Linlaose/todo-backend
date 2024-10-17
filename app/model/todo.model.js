module.exports = (sequelize, Sequelize) => {
  const Todos = sequelize.define("todos", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    memo: {
      type: Sequelize.STRING,
    },
    is_done: {
      type: Sequelize.BOOLEAN,
    },
    started_at: {
      type: Sequelize.DATE,
    },
    ended_at: {
      type: Sequelize.DATE,
    },
  });
  return Todos;
};
