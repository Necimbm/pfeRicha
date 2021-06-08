const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const artisanSchema = new mongoose.Schema({ 
    nom:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    prenom:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    numBatinde:{
        type:String,
        required:true,
        unique:true
    },
    Experience:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true,
        
    },
    role:{
        type:String,
        enum:[0,1,2,] //0:user,1:fournisseur,2:artisan,3:admin
    },
    contactNumber:{type:String},
    profilePicture:{type:String}
},{timestamps:true});

artisanSchema.virtual('password')
.set(function(password){
this.hash_password=bcrypt.hashSync(password,10);

});
artisanSchema.methods={
    authenticate:function(Password){
        return bcrypt.compareSync(Password, this.hash_password);
    }
}
module.exports = mongoose.model('Artisan',artisanSchema);
