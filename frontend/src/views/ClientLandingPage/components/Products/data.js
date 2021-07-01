import product1 from '../images/product-1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product-3.jpg';
import product4 from '../images/fokhar.jpg';
import Zarbia from '../images/personnaliser1.jpg';
import braclet from '../images/braclet.jpg';



 const data = {
   products:[
  { _id:'1',
  seller:'Zahra',
    img: product1,
    alt: 'Zarbia',
    name: 'Margoum',
    desc:
      'Zarbia margoum, taille 5m x 10m ',
    price: '5000 DT',
    rating:'1.5',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:0,
    category:"house"
  },
 
  { _id:'2',
  seller:'Souad',
    img: product2,
    alt: 'Jebba',
    name: 'Jebba homme',
    desc:
      'Jebba kamraya, couleur blanc, sur meusure',
    price: '250 DT',
    rating:'2.5',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:5,
    category:"clothes"
  },
  { _id:'3',
  seller:'Lotfi',
    img: product3,
    alt: 'Farda',
    name: 'Farda',
    desc:
      'Farda en Or, 24k, sur meusure',
    price: '2000 DT',
    rating:'4',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:1,
    category:"colier"
  },
  { _id:'4',
  seller:'Mohsen',
    img: product4,
    alt: 'Jars en argile',
    name: 'Jars',
    desc:
      'Jars de décoration en argile ',
    price: ' 50 DT',
    rating:'3',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:0,
    category:"glass"
  },
 
  { _id:'5',
    seller:'Rokaia',
    sellerLocation:'Monastir',
    img: Zarbia,
    alt: 'Jebba',
    name: 'Margoum',
    desc:
      'Zarbia margoum, taille 15m x 30m par',
    price: '250 DT',
    rating:'1',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:6,
    category:"house"
  },
  { _id:'6',
   seller:'Mounji',
    img: braclet,
    alt: 'Farda',
    name: 'Farda',
    desc:
      'Farda en Or, 24k, sur meusure',
    price: '2000 DT',
    rating:5,
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:10,
    category:"colier"
  }
]}
;
export default data;