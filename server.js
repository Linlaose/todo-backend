const express = require("express");
const app = express();

require("./app/routes/demo.routes")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
