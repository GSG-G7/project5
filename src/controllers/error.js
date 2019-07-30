const path = require('path');

exports.clienterror = (req, res) => {
    res
      .status(404)
      .send('clinet error')
}

exports.servererror = (err, req, res, next) => {
    res
      .status(500)
      .send('server error')
}

