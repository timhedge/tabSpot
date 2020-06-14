import axios from 'axios';

export default (req, res) => {
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
      res.status(200).send(result.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).end();
    })
  }
};