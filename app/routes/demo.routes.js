const { sequelize } = require("../model");

module.exports = (app) => {
  app.get("/", async function (req, res) {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
    res.send("Hello World");
  });
};
