const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Use req.db to interact with the database
  res.send("Hello World!");
});

router.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
