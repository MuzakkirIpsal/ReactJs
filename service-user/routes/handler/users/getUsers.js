const {User} = require ('../../../models');

module.exports = async (req, res) => {
    
    /*variabel user id atau defaul kosong array*/
    const userIds = req.query.user_ids || [];

    const sqlOptions = {
        attributes : ['id', 'name','email','role','profession','avatar']
    }

    /* mengecek jika userIDS panjang nya lebih dari 1 maka melakukan query select * from where in id */
    if (userIds.length) {
        sqlOptions.where = {
            id : userIds
        }
    }
    
    /* Mencari list user */
    const users = await User.findAll(sqlOptions);

    return res.json({
        status : 'success',
        data : users
    });
}