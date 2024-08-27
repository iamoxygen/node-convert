const express = require("express");
const app = express();
const fs = require("fs");

const PORT = 8000;

fs.readdirSync("./routers").map((route) =>
    app.use("/api", require(`./routers/${route}`))
  );
  
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
