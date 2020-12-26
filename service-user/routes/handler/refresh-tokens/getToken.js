const {RefreshToken} = require ('../../../models');

module.exports = async (req, res) => {
/* mengambil sebuah paramter dari query param */
    const refreshToken = req.query.refresh_token;

    /* mengecek refresh token ada di database atau tidak */
    const token = await RefreshToken.findOne({
        where: { token: refreshToken}
    });
    /* jika tidak ada kasi respon */
    if (!token){
        return res.status(400).json({
            status : 'error',
            message : 'invalid token'
        })
    }

    /* jika ada respon */

    return res.json({
        status : 'success',
        token
    });

    /* note jangan lupa panggil di index.js dan di rooter nya refreshTokens.js */
}