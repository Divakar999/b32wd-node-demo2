const mongo=require('../shared/connect');

exports.signup = async (req, res, next) => {
    //Email already exists  validation error
    const existUser = await mongo.selectedDB.collection('user').findOne({email:req.body.email});
    if (existUser) return res.status(500).send({msg:"You are already a registered User"})
}