const router = require("express").Router();
const jwtwebToken = require("jsonwebtoken");
const users = require("./mock.users");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 400, message: "Informe o usuário e a senha" });
  }

  const finded = users.find(
    (item) => (item.username === username || item.email === username || item.document === username) && item.password === password
  );

  if (finded) {
    const webToken = jwtwebToken.sign({ userId: finded.id, email: finded.email, name: finded.name }, "SuperS3c43tKey");

    return res.json({ message: "Logado com sucesso", token: webToken, refreshToken: webToken });
  }

  return res.status(401).json({ error: 401, message: "Usuário não cadastrado ou dados de login inválidos" });
});

module.exports = router;
