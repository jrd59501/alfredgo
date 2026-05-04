const express = require("express");
const path = require("path");
const tools = require("./data/tools");

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "..", "public");

app.use(express.static(publicDir));

app.get("/api/tools", (req, res) => {
  const role = req.query.role;
  const list = tools[role] || tools.student;
  res.json(list);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
