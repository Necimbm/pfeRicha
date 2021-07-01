import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../../actions/orderActions';
import {deleteannonce, listannonces} from  '../../actions/annonncesAction'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Navbar from 'views/Fournisseur/components/Navbar';
import { Link } from '@material-ui/core';
import { ProductButton } from 'views/LandingPage/components/Products/ProductsElements';
import ReactCircleModal from 'react-circle-modal';
import { Popup } from 'views/LandingPage/components/Products/ProductsElements';
import AjouterAnnonce from './AjouterAnnonce';

export default function AnnoncesListScreen(props) {


  const annonces = useSelector((state) => state.annonceList);
  const { loading, error, annonce } = annonces;
  const dispatch = useDispatch();

  const deletehundler= (item)=>{
    if (window.confirm('Voulez-vous continuer ?')) {
      dispatch(deleteannonce(item._id));
      dispatch(listannonces());}
  }
  useEffect(() => {
    dispatch(listannonces({}));
  }, [dispatch]);
  return (<div>
   { loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : ( <div >

    <ReactCircleModal 
      backgroundColor="rgba(166, 174, 179, 0.61)  "
      display="flex"
      alignItems="center"
      justifyContent="center"

      toogleComponent={onClick => (
        <ProductButton style={{position:"absolute",right:"0",marginRight:"3rem",backgroundColor:"#fdcc8d",fontFamily:"montserrat",fontSize:"1.5rem",fontWeight:"bold",color:"black",padding:"1.5rem",borderRadius:"50px",decoration:"none"}} onClick={onClick}>Ajouter Annonce</ProductButton>
      )}
     
    >
      {(onClick) => (
        <div style={{display:"flex",justifyContent:"center"}}>
        <div>
        <button style={{position:"absolute",top:"0",marginTop:"5.5rem",marginLeft:"26rem",fontFamily:"montserrat",backgroundColor:"#fdcc8d",color:"#000",fontWeight:"bold",padding:"1.5rem"}} onClick={onClick}>X</button>
        </div>
        
         <AjouterAnnonce/>
        </div>
      )}
    </ReactCircleModal>
       
       
        <h1 style={{fontFamily:"montserrat",fontSize:"5rem",fontWeight:"1000",marginTop:"5rem"}}>Annonces<fa CartPlus/></h1>

        <table className="table">
          <thead>
            <tr>
              <th>PRODUIT</th>
              <th>DESCRIPTION</th>
              <th>DATE D'AJOUT</th>
              <th>PRIX</th>
              <th>QUNATITE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {annonce.map((item) => (
              <tr key={item._id}>
                <td> <div>{item.name}</div>
                        <img className="small"
                          src={item.image}
                          alt={item.name}
                        ></img>  
                      </td>
                <td>{item.description}</td>
                <td>{item.createdAt}</td>
                <td> {item.price} DT</td>
                <td>  {item.countInStock}</td>
                <td>
          
                  <button
                    type="button"
                    className="small"
                   onClick={() => deletehundler(item)}
                  >
                    Effacer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
          )} 
 
      </div>
  )
}

