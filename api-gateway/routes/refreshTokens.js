const express = require('express');
const router = express.Router();
// const {APP_NAME} = process.env;


const refreshTokensHandler = require('./handler/refresh-tokens');

//panggil router
router.post('/', refreshTokensHandler.refreshToken);

module.exports = router;
