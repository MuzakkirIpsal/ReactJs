const {
    User,
    RefreshToken
} = require('../../../models');

module.exports = async (req, res) => {
    const userId = req.body.user_id;
    //const tokenId = req.body.user_id
    try {

        const user = await User.findByPk(userId);
        if(!user) {
            return res.status(404).json({
                status :'error',
                message :'user not found'
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            status : 'error',
            message :error.message             
        });        
    }
    
 
        const token = await RefreshToken.findOne({
            where : { user_id : userId}        
        });
        
        if (!token) {
            return res.status(404).json({
                status : 'error',
                message : 'token sebelumnya sudah di deleted'
            });
        }

        await RefreshToken.destroy({
            where : { user_id : userId}
        });

        return res.json({
            status : 'success',
            message : 'refresh token deleted'
        });
        
        // res.status (500) .json ({message: err.message}); 

 

    /* daftarkan di index.js dan panngil ke routes nya di user.js  */

}