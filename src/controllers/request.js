const request = require('request');

const gifReqest = (url) => {
  const gifPromise = new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) {
        reject('Error : response is no JSON');
      }
      resolve(JSON.parse(body));
    });
  });
  return gifPromise;
};


exports.post = (req, res) => {
  const value = req.body.input.trim();
  const gifUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
  gifReqest(gifUrl)
    .then((apiRes) => {
      res.send(apiRes);
    })
    .catch(error => error.message);
};
