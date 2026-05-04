const express = require("express");
const path = require("path");
const tools = require("./data/tools");

const app = express();

// Use the port Render gives us, or 3000 locally
const PORT = process.env.PORT || 3000;

// Serve everything in the public folder as static files
const publicDir = path.join(__dirname, "..", "public");
app.use(express.static(publicDir));

// Returns the tool list for a given role (student, staff, admin)
// Defaults to student if no role is provided
app.get("/api/tools", (req, res) => {
  const role = req.query.role;
  const list = tools[role] || tools.student;
  res.json(list);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
