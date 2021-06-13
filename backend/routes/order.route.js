const express = require('express');
const Mailgun = require('mailgun-js');
const expressAsyncHandler = require('express-async-handler');
const isAdmin =require('../middleware/auth');
const isAuth =require('../middleware/auth');


const router = express.Router();

const Order = require('../models/Order');
const User = require('../models/User');



router.get('/', (req , res , next)=>{
  Order.find()
  .then(orders => res.status(200).json(orders))
  .catch(error => res.status(404).json({ error }));
});
router.post('/',expressAsyncHandler(async(req,res)=>{
    //chacking if oreder item contain item or not
    if(req.body.orderItems.lenght === 0){
        res.status(400).send({
            message : 'Cart is empty'
        });
    } else{
        const order = new Order({
            orderItems : req.body.orderItems,
            shippingAddress : req.body.shippingAddress,
            payementMethod : req.body.paymentMethod,
            itemsPrice : req.body.itemsPrice,
            shippingPrice : req.body.shippingPrice,
            taxPrice : req.body.taxPrice,
            totalPrice : req.body.totalPrice,
           
    });
    const createOrder = await order.save();
    res.status(201).send({
        message : 'New order have been created', 
        order : createOrder
    })
}
}));

router.use(
  '/:id',
  expressAsyncHandler(async (req, res,next) => {
    Order.findOne({
      _id : req.params.id 
    }).then((order)=>{
        res.status(200).json(order);
    }).catch(
        (error)=>{
            res.status(404).json({
                error:error
            })
        }
    )
})
  );

 router.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        const deleteOrder = await order.remove();
        res.send({ message: 'Order Deleted', order: deleteOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );
 
  


module.exports = router