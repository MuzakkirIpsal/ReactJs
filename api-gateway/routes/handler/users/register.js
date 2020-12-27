
// panggil apiAdapter
const apiAdapter = require('../../apiAdapter');
// panggil config variabel di .env
const {
    URL_SERVICE_USER
} = process.env;


// VARIABEL API memanggil apiAdapter
const api = apiAdapter(URL_SERVICE_USER);

//function 
module.exports = async (req, res) => {

    try {
        // panggil api media dari service media
        const user = await api.post('/users/register', req.body);
        return res.json(user.data); //media.data object dari axios

        // console.log(media.data)
    } catch (error) {
        
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({status: 'error', message :'service unavailable'});
        }
        const {status, data} = error.response;
        return res.status(status).json(data); // status http code misal 400
    }



}