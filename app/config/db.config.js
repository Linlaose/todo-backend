module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "2u4u h4m/4mysql",
  DB: "todo_app",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
