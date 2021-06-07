const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const clientSchema = new mongoose.Schema({ 
    name:{
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
        enum:['client']
    },
    contactNumber:{type:String},
    profilePicture:{type:String}
},{timestamps:true});

clientSchema.virtual('password')
.set(function(password){
this.hash_password=bcrypt.hashSync(password,10);

});
clientSchema.methods={
    authenticate:function(Password){
        return bcrypt.compareSync(Password, this.hash_password);
    }
}
module.exports = mongoose.model('Client',clientSchema);
