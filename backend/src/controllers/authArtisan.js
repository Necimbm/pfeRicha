const Artisan = require('../models/artisan');
const jwt = require('jsonwebtoken');


exports.signup = (req,res)=>{
    Artisan.findOne({email: req.body.email}).exec((error, Artisan)=>{
        if (Artisan)return  res.status(400).json({
            message:'Utilisateur existant'
        });
        
        const {
        nom,
        email,
        prenom,
        hash_password,
        Experience,
        numBatinde
        }=req.body;
        const _Artisan = new Artisan({
            nom, email,hash_password,Experience,
            numBatinde,prenom
        });
         _Artisan.save((error, data)=>{
                if(error){
                    return res.status(400).json({
                    message:error
                });
            }
                if(data){
                    return res.status(201).json({
                        message:"Artisan create successfully"
                        });
                }
            });
            });
}
exports.signin=(req, res)=>{
    Artisan.findOne({email:req.body.email})
    .exec((error,Artisan)=>{
        if(error) return res.status(404).json({error});
        if(Artisan){
            if(Artisan.hash_password===req.body.password){
                var token=jwt.sign({_id:Artisan._id},'mypassword',{expireIn:'1h'});
                const { nom, email,password}=Artisan;
                res.status(200).json({
                  token,
                    Artisan:{nom,email,password}
                });
            }else{
                return res.status(400).json({
                   
                    message: "invalide"
                 
                })
            }

                    }else{
            return res.status(400).json({message:'smthg went worng '})
        }
    });
}