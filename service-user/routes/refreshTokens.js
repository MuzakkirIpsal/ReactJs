

const express = require('express');
const router = express.Router();


const refreshTokensHandler = require ('./handler/refresh-tokens');

/* panggil router create.js */
router.post('/', refreshTokensHandler.create);

/* panggil router getToken.js */

router.get('/', refreshTokensHandler.getToken );



module.exports = router;