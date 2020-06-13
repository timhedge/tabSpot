const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 8080;
const cors = require('cors');
const axios = require('axios');

dotenv.config();

app.use(cors());
app.listen(port, () => console.log(`tabspot app listening at http://localhost:${port}`));

app.get(`/tastedive`, (req, res) => {
  if (req.query.searchTerms === '') {
    res.send([]);
  } else {
    axios.get(`https://tastedive.com/api/similar?`, {
      params: {
        q: req.query.searchTerms,
        info: 1,
        limit: 5,
        k: process.env.tastediveApiKey
      }
    })
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
});

app.get(`/songsterr`, (req, res) => {
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

