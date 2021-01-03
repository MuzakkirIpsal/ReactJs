const express = require('express');
const router = express.Router();
// const {APP_NAME} = process.env;


const userHandler = require('./handler/users');
const verifyToken = require('../middlewares/verifyToken');


//panggil router
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.put('/', verifyToken, userHandler.update);



// router.get('/', mediaHandler.getAll);
// router.delete('/:id', mediaHandler.destroy);


module.exports = router;
