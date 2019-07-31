const express = require('express');
const router = express.Router();
const request = require('./request')
const error = require('./error');


router.get('/search',request.get)
router.post('/search',request.post)
router.use(error.clienterror);
router.use(error.servererror);

module.exports = router;