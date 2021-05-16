const isAuthenticated = require("../middleware/is-authenticated");
const users = require("./mock.users");
const router = require("express").Router();

router.get("/balance/", (req, res) => {
  const { userId } = req.decoded;
  const user = users.find((item) => item.id === userId);
  if (user) {
    return res.status(200).json({ balance: user.balance });
  }

  return res.status(400).json({ error: 400, message: "Não foi possivel realizar esta consulta" });
});

module.exports = router;
