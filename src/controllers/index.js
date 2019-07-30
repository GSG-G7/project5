const express = require('express');
const router = express.Router();

const error = require('./error');

router.use(error.clienterror);
router.use(error.servererror);

module.exports = router;