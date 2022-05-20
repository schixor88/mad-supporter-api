const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!",
    root: "android-supporter-api",
  });
});

app.use("/users", require("./routes/users.route"));

app.listen("3321", () => {
  console.log("-- server running at 3321");
});
