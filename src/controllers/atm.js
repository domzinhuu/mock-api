require("dotenv").config();
const axios = require("axios");
const router = require("express").Router();

router.get("/localization", async (req, res) => {
  const { latitude, longitude } = req.query;

  const url = process.env.API_URL_TECBAN + "/localizacao";

  // Add Your Key Here!!!
  axios.defaults.headers.common = {
    "X-API-Key": process.env.X_API_KEY,
  };

  try {
    const response = await axios.get(`${url}?longitude=${longitude}&latitude=${latitude}&limite=50&lista=1&acessivel=0&raio=20&disp=0`);
    return res.status(200).json(response.data.Results);
  } catch (error) {
    return res.status(error.response.status).json({ error: error });
  }
});

module.exports = router;
