import axios from 'axios';

export default (req, res) => {
  axios.get(`http://www.songsterr.com/a/ra/songs.json?`, {
    params: {
      pattern: req.query.searchTerms
    }
  })
  .then((result) => {
    res.status(200).send(result.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).end();
  })
};