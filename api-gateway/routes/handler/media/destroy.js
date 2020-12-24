
// panggil apiAdapter
const apiAdapter = require('../../apiAdapter');
// panggil config variabel di .env
const {
    URL_SERVICE_MEDIA
} = process.env;


// VARIABEL API memanggil apiAdapter
const api = apiAdapter(URL_SERVICE_MEDIA);

//function 
module.exports = async (req, res) => {

    try {
        // mengambil parameter id dari url id
        const id = req.params.id;
        // panggil api media dari service media
        const media = await api.delete(`/media/${id}`);
        return res.json(media.data); //media.data object dari axios

        // console.log(media.data)
    } catch (error) {
        
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({status: 'error', message :'service unavailable'});
        }
        const {status, data} = error.response;
        return res.status(status).json(data); // status http code misal 400
    }



}