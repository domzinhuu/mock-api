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

router.get("/distance", async (req, res) => {
  const { origin, destiny, mode } = req.query;

  try {
    const url = "https://maps.googleapis.com/maps/api/distancematrix/json";
    const params = {
      units: "metrics",
      mode: mode,
      origins: origin,
      destinations: destiny,
      key: process.env.GOOGLE_API_KEY,
    };
    const response = await axios.get(url, { params });

    const data = {
      destination: response.data.destination_addresses[0],
      origin: response.data.origin_addresses[0],
      distance: {
        value: response.data.rows[0].elements[0].distance.text,
        duration: response.data.rows[0].elements[0].duration.text,
      },
    };

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.response);
  }

  return res.json({ startPoint, endPoint });
});

module.exports = router;
