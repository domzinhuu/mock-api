const isAuthenticated = require("../middleware/is-authenticated");
const transactions = require("./mock.transactions");
const router = require("express").Router();

router.get("/all", (req, res) => {
  return res.status(200).json({ transactions });
});

module.exports = router;
