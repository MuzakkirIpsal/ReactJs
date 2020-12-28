const jwt =require('jsonwebtoken');
const {JWT_SECRET} = process.env;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization ;
    //mengecek valid atau ga token nya
    jwt.verify(token, JWT_SECRET, function(err, decoded) {
        if (err){
            return res.status(403).json({
                message : err.message
            });
        }
    // tidak error inject data terdecoded di object request 

        req.user = decoded ;
        return next();

    });
}
