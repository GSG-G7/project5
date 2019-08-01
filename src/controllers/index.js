const express = require('express');

const { post } = require('./request');
const { clientError, serverError } = require('./error');

const router = express.Router();

router.post('/search', post);
router.use(clientError);
router.use(serverError);

module.exports = router;
