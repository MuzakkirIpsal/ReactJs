const axios = require('axios'); //devinisikan axios

const {TIMEOUT} = process.env; // devinisikan timeout dari env

module.exports = (baseUrl) => {

    return axios.create ({
        baseURL : baseUrl,
        timeout : TIMEOUT
    });
}