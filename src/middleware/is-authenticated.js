const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const bearerToken = req.headers["authorization"];

  if (!bearerToken) {
    return res.status(401).json({ error: 403, message: "Usuário não autenticado" });
  }

  const token = bearerToken.split(" ")[1];

  const decoded = jwt.verify(token, "SuperS3c43tKey");

  if (decoded.userId) {
    req.decoded = decoded;
    return next();
  }

  return res.status(401).json({ error: 401, message: "Token inválido ou expirado" });
};

module.exports = isAuthenticated;
