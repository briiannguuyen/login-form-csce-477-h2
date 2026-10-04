const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const USER = {
  email: "admin@juice.com",
  passwordHash: "$2b$10$0SeS5cngyjQW.J7oN8rEPe9Azsyx2bauaj9tWqqEeEojtupUxAYJy" 
};

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: "Missing fields" });
  if (!email.includes("@")) return res.status(400).json({ error: "Invalid email" });
  if (password.length < 8) return res.status(400).json({ error: "Password too short" });

  const ok = email === USER.email && await bcrypt.compare(password, USER.passwordHash);
  res.json(ok ? { success: true } : { error: "Incorrect credentials" });
});

app.listen(3001, () => console.log("Server on http://localhost:3001"));