
// panggil apiAdapter
const apiAdapter = require('../../apiAdapter');

//panggil jwt
const jwt = require('jsonwebtoken');

// panggil config variabel di .env
const {
    URL_SERVICE_USER,
    JWT_SECRET,
    JWT_SECRET_REFRESH_TOKEN,
    JWT_ACCESS_TOKEN_EXPIRED,
    JWT_REFRESH_TOKEN_EXPIRED

} = process.env;


// VARIABEL API memanggil apiAdapter
const api = apiAdapter(URL_SERVICE_USER);

//function 
module.exports = async (req, res) => {

    try {
        // panggil api user dari service media
        const user = await api.post('/users/login', req.body);
        
        const data = user.data.data;

        
        const token = jwt.sign({ data }, JWT_SECRET, { expiresIn : JWT_ACCESS_TOKEN_EXPIRED});
        const refreshToken = jwt.sign({ data }, JWT_SECRET_REFRESH_TOKEN, { expiresIn : JWT_REFRESH_TOKEN_EXPIRED});
        // console.log(token);
        // menyimpan refresh token di table refresh token berada di service user: cara panggil kesana
        await api.post('/refresh_tokens', {refresh_token: refreshToken, user_id : data.id});
        
        return res.json({
            status: 'success',
            data :{
                token,
                refresh_token : refreshToken
            }
        });
        
        return res.json(user.data); //user.data object dari axios


        // console.log(media.data)
    } catch (error) {
        
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({status: 'error', message :'service unavailable'});
        }
        const {status, data} = error.response;
        return res.status(status).json(data); // status http code misal 400
    }



}