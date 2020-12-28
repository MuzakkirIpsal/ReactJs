const express = require('express');
const router = express.Router();
// const {APP_NAME} = process.env;


const mediaHandler = require('./handler/media');

const verifyToken = require('../middlewares/verifyToken');

//panggil router
router.post('/', mediaHandler.create);
router.get('/', verifyToken, mediaHandler.getAll);
router.delete('/:id', mediaHandler.destroy);


module.exports = router;
