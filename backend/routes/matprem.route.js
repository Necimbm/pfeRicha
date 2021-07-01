const expressAsyncHandeler = require('express-async-handler');
const express  = require('express');
const router = express.Router();
// const craftManAuth = require('../middleware/craftManAuth');
const auth = require('../middleware/auth');
const Material = require('../models/MatièrePrem');
const multer  = require("multer");
const Materialprod = require('../models/Matprod');

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null,'../frontend/public/images');
    },
  filename: (req, file, callback)=>{
    callback(null, file.originalname);
}
})


const upload = multer({storage: storage, limits:{
    fileSize:1024*1024*5
}});



// adding a new product
router.post('/addmat',upload.single("file"), (req, res, next)=>{
    //delete champ id of the request
   
      
    
    delete req.body._id;
    const Matprem = new Material({
       ...req.body,
       image:"/images/"+req.file.originalname
       
        //will copy diffrent info in the body of the request  and will detail every champ
    });
    
    Matprem.save()
    .then(() => res.status(201).json({ 
        message: 'material added!'
    }))
    .catch(error => res.status(400).json({ 
        error ,
        message: 'erreur'
    }));
});


//returns list one product by id
router.get('/material/:id', (req, res, next)=> {
    Material.findOne({
      _id : req.params.id 
    }).then((matprem)=>{
        res.status(200).json(matprem);
    }).catch(
        (error)=>{
            res.status(404).json({
                error:error
            })
        }
    )
});

//listting all the products
router.get('/materials', (req , res , next)=>{
    Material.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(404).json({ error }));
});
router.get('/materialsProd', (req , res , next)=>{
    Materialprod.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(404).json({ error }));
});


//deletting product
router.delete('/delmat/:id',(req, res, next)=>{
    Material.deleteOne({_id : req.params.id})
    .then(() => res.status(200).json({ message : 'Material have been deleted ! '}))
    .catch(error => res.status(400).json({ error }));
});



module.exports = router