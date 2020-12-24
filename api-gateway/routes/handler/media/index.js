// index.js load semua folder handler\media

//panggil media.js
const create = require('./create');
const getAll = require('./getAll');
const destroy = require('./destroy');

module.exports={
    create,
    getAll,
    destroy
};