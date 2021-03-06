const mongoose = require('mongoose');

const artannonceschema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    image:{
        type : String,
        required : true,
    },
    price:{
        type :Number,
        required : true,
    },
    countInStock:{
        type : Number,
        required : true,
    },
    description :{
        type :String,
        required: true,
    },
    rating :{
        type : Number ,
        default :-1,
        max : 5,
    },
    numReviews :{
        type : Number,
        
    },
    category :{
        type : String,
        required : true,
    },
    seller:{
        type : String,
        required : true, 
    }


},{
    timestamps:true
});

module.exports = mongoose.model('ArtisanAnnonce', artannonceschema);