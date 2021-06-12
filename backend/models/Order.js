const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderItems  :[{
    name : {
      type :String,
      required : true,
    },
    qty :{
      type:Number,
      requird:true,
    },
    image:{
      type:String,
      required:true,
    },
    price:{
      type:Number,
      required:true,
    },
    product:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Product',
      required:true,
    },
  }],
  shippingAddress : {
    fullName : {
      type:String,
      required:true,
    },
    address : {
      type:String,
      required:true,
    },
    city : {
      type:String,
      required:true,
      default:"Tunis"
    },
    postalCode : {
      type:String,
      required:true,
    },
 
  },
  payementMethod :{
    type:String,
    required:true,
  },
  paymentResult:{
    id:String,
    status:String,
    update_time:String,
    email_adress:String,
  },
  itemsPrice: {
    type:Number,
    required:true,
  },
  shippingPrice: {
    type:Number,
    required:true,
    default: 8
  },
  taxPrice:{
    type:Number,
    required:true
  },
  totalPrice: {
    type:Number,
    required:true,
  },

},{
  timestamps:true,
})

/*const orderSchema = new mongoose.Schema({
  cart:{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
  },
  user :{
    type : mongoose.Schema.Types.ObjectId,
    ref :'User',
  },
  total :{
    type : Number,
    default : 0,
  },
  updated : Date,
  created:{
    type :Date,
    default : Date.now,
  }
});*/

module.exports = mongoose.model('Order', orderSchema);