//as login is working here we are making the middleware that will check if user is sign or not by checking token 
const { response } = require('express');
const jwt = require ('jsonwebtoken');

module.exports =isAuth=function (req, res, next){
    //get token from header 
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
      jwt.verify(
        token,
        process.env.JWT_SECRET || 'mymagicalsecretkey',
        (err, decode) => {
          if (err) {
            res.status(401).send({ message: 'Invalid Token' });
          } else {
            req.user = decode;
            next();
          }
        }
      );
    } else {
      res.status(401).send({ message: 'No Token' });
    }
  };

module.exports = isArtisan = (req, res, next) => {
    if (req.user && (req.user.role===2)) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Artisan Token' });
    }
  };
  module.exports = isAdmin = (req, res, next) => {
    if (req.user && (req.user.role===3)) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Admin Token' });
    }
  };
  module.exports = isClient = (req, res, next) => {
    if (req.user && (req.user.role===0)) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Client Token' });
    }
  };
  module.exports = isSeller = (req, res, next) => {
    if (req.user && (req.user.role===1)) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Seller Token' });
    }
  };

  module.exports = isSellerorArtisanorAdmin = (req, res, next) => {
    if (req.user && (req.user.role===1)) {
      next();
    } else if(req.user.role===2){
      next();
          }else if(req.user.role===3){
      next(); 
    }else{
      res.status(401).send({ message: 'Invalid Token' });

    }
  };


