const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const axios = require('axios');
const tastediveApiKey = require('../apiKeys/tastediveApiKey.js');

app.use(cors());
app.listen(port, () => console.log(`tabspot app listening at http://localhost:${port}`));

app.get(`/tastedive`, (req, res) => {
  console.log(req.query)
  axios.get(`https://tastedive.com/api/similar?`, {
    params: {
      q: req.query.searchTerms,
      info: 1,
      limit: 5,
      k: tastediveApiKey.tastediveApiKey
    }
  })
  .then((result) => {
    res.send(result.data);
  })
  .catch((error) => {
    console.log(error);
  })
});

app.get(`/songsterr`, (req, res) => {
  console.log(req.query)
  axios.get(`http://www.songsterr.com/a/ra/songs.json?`, {
    params: {
      pattern: req.query.searchTerms
    }
  })
  .then((result) => {
    res.send(result.data);
  })
  .catch((error) => {
    console.log(error);
  })
});

