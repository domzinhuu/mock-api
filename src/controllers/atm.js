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
    const response = await axios.get(`${url}?longitude=${longitude}&latitude=${latitude}&limite=50&lista=1&acessivel=0&raio=50&disp=0`);
    return res.status(200).json(response.data.Results);
  } catch (error) {
    return res.status(error.response.status).json({ error: error });
  }
});

router.get("/localization/by-place-id", async (req, res) => {
  try {
    const { placeId } = req.query;
    const params = {
      place_id: placeId,
      key: process.env.GOOGLE_API_KEY,
    };
    const result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, { params });

    const data = result.data;

    const { lat, lng } = data.results[0].geometry.location;
    const url = process.env.API_URL_TECBAN + "/localizacao";

    // Add Your Key Here!!!
    axios.defaults.headers.common = {
      "X-API-Key": process.env.X_API_KEY,
    };

    const response = await axios.get(`${url}?longitude=${lng}&latitude=${lat}&limite=50&lista=1&acessivel=0&raio=50&disp=1`);

    return res.status(200).json({ location: { lat, lng, viewport: data.results[0].geometry.viewport }, atms: response.data.Results });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
});

router.get("/distance", async (req, res) => {
  const { origin, destiny, mode } = req.query;

  try {
    const url = "https://maps.googleapis.com/maps/api/distancematrix/json";
    const params = {
      units: "metrics",
      mode: mode,
      language: "pt_BR",
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
});

router.get("/distance/raw", async (req, res) => {
  const { origin, destiny, mode } = req.query;

  try {
    const url = "https://maps.googleapis.com/maps/api/distancematrix/json";
    const params = {
      units: "metrics",
      mode: mode,
      language: "pt_BR",
      origins: origin,
      destinations: destiny,
      key: process.env.GOOGLE_API_KEY,
    };
    const response = await axios.get(url, { params });

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json(error.response);
  }
});

router.get("/places", async (req, res) => {
  const { input } = req.query;

  if (input && input.length >= 5) {
    try {
      const params = {
        language: "pt_BR",
        input: input,
        offset: 5,
        key: process.env.GOOGLE_API_KEY,
      };
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?`, { params });
      const data = response.data;

      if (data.status === "OK") {
        const options = data.predictions.map((predic) => ({ description: predic.description, placeId: predic.place_id }));
        return res.status(200).json({ options, status: "OK", raw: data });
      }

      return res.status(200).json({ options: [], status: "EMPTY" });
    } catch (error) {
      return res.status(error.response.status).json(error.response);
    }
  }

  return res.status(200).json({ options: [], status: "EMPTY" });
});

module.exports = router;
