
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
        const id = req.user.data.id;        
        const user = await api.put(`/users/${id}`, req.body);
        // return res.json(req.user);
        return res.json(user.data); 

    } catch (error) {
        
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({status: 'error', message :'service unavailable'});
        }
        const {status, data} = error.response;
        return res.status(status).json(data); // status http code misal 400
    }



}