import product1 from '../images/product-1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product-3.jpg';
import product4 from '../images/fokhar.jpg';
import Zarbia from '../images/personnaliser1.jpg';
import braclet from '../images/braclet.jpg';



 const data = {
   products:[
  { id:'1',
    img: 'https://www.dynamique-mag.com/wp-content/uploads/772d3ecbf846fa8eb2e7ff47ff622311.jpg',
    alt: 'Or',
    name: 'Or',
    desc:
      'Or bonne qualitée, 24 carats 18 carats',
    price: 'à partir de 1000 DT',
    rating:'10',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:'100'
  },
 
  { id:'2',
    img: product2,
    alt: 'Jebba',
    name: 'Jebba homme',
    desc:
      'Jebba kamraya, couleur blanc, sur meusure',
    price: '250 DT',
    rating:'2.5',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:'5'
  },
  { id:'3',
    img: product3,
    alt: 'Farda',
    name: 'Farda',
    desc:
      'Farda en Or, 24k, sur meusure',
    price: '2000 DT',
    rating:'4',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:'1'
  },
  {id:'4',
    img: product4,
    alt: 'Articles en argile',
    name: 'Fokhar',
    desc:
      'Toute article de décoration en argile ',
    price: 'à partir de 50dt',
    rating:'3',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:'0'
  },
 
  { id:'5',
    img: Zarbia,
    alt: 'Jebba',
    name: 'Jebba homme',
    desc:
      'Jebba kamraya, couleur blanc, sur meusure',
    price: '250 DT',
    rating:'1',
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:'6'
  },
  { id:'6',
    img: braclet,
    alt: 'Farda',
    name: 'Farda',
    desc:
      'Farda en Or, 24k, sur meusure',
    price: '2000 DT',
    rating:5,
    numReviews:10,
    button: 'Ajouter au panier',
    countInStock:'10'
  }
]
};
export default data;