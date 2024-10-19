module.exports = (sequelize, Sequelize) => {
  const Todos = sequelize.define("todos", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
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
