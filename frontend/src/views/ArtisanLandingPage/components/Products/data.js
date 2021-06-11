import product1 from '../images/product-1.jpg';
import Tessuorange from '../images/Tessuorange.jpg';
import tessujaune from '../images/tessujaune.jpg';
import argile from '../images/argile.jpg';
import bois from '../images/bois.jpg';
import braclet from '../images/braclet.jpg';



 const data = {
   products:[
  { _id:'1',
    img: 'https://www.dynamique-mag.com/wp-content/uploads/772d3ecbf846fa8eb2e7ff47ff622311.jpg',
    alt: 'Or',
    name: 'Or',
    seller:'seller1',
    category:"or",
    desc:
      'Or bonne qualitée, 24 carats 18 carats, quantité par kilo',
    price: 1000,
    rating:'10',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:100
  },
 
  { _id:'2',
    img: Tessuorange,
    alt: 'Tessu2',
    name: 'Tessu orangé',
    category:"tessu",
    seller:'sller2',
    desc:
      'Tissus nylon ornagé,bonne qualité,par mètre',
    price: 250 ,
    rating:'2.5',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:15
  },
  { _id:'3',
    img: tessujaune,
    alt: 'Tessu2',
    name: 'Tessu jaune',
    seller:'sller2',
    category:"tessu",
    desc:
      'Tissus nylon ornagé,bonne qualité,par mètre',
    price: '2000 DT',
    rating:'4',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:1
  },
  { _id:'4',
    img: argile,
    alt: 'Argile',
    name: 'Argile',
    seller:'sller3',
    category:"argile",
    desc:
      'Argile de bonne qualité,de djerba,par kilo',
    price: 10,
    rating:'3',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:0
  },
 
  { _id:'5',
    img: bois,
    alt: 'Bois',
    name: 'Bois',
    category:"bois",
    desc:
      'Bois de la foret de sajnen,bonne qualité, par kilo',
    price: 50,
    rating:'1',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:10
  },
 
]
};
export default data;