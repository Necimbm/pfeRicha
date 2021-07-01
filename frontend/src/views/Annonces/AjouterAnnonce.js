import Axios from 'axios';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input } from "views/signin/components/accountBox/common";
import { FormContainer } from "views/signin/components/accountBox/common";
import {createAnnonce} from "../../actions/annonncesAction"





function AjouterAnnonce() {


const [product, setProduct] = useState(null);
const [price, setPrice] = useState(null);
const [descrp, setDescrp] = useState(null);
const [seller, setSeller] = useState(null);
const [countInStock, setCountInStock] = useState(null);
const [category, setCategory] = useState(null);
  
  const [SelectedFile, setSelectedFile] = useState(null)
  const dispatch =useDispatch();

const handleFile =(e)=>{
  setSelectedFile(e.target.files[0])
 

}
 
const handleSubmit = (e) => {

  const data = new FormData();
  data.append("name",product);
  data.append("price",price);
  data.append("description",descrp);
  data.append("seller",seller);
  data.append("countInStock",countInStock);
  data.append("category",category);
  data.append("file", SelectedFile);

  Axios.post("http://localhost:5000/api/addmat",data).then((res)=>console.log(res)).catch((err)=>console.log(err))
  

    
};
  

  return (
    <FormContainer className="card" style={{backgroundColor:"#fff",width:"300px",height:"500px"}} onSubmit={handleSubmit}>
     
    <h1 style={{position:"absolute",top:"0",fontFamily:"montserrat",marginTop:"8rem"}}>Ajouter Produit</h1>
    <Input type="text" name="Product" placeholder="Produit" onChange ={e=>{setProduct(e.target.value)}}/>
    <Input  type="text" name="Price" placeholder="Prix" onChange ={e=>{setPrice(e.target.value)}}/>
    <Input  type="text" name="Description" placeholder="Description" onChange ={e=>{setDescrp(e.target.value)}}/>
    <Input  type="text" name="Seller" placeholder="Seller" onChange ={e=>{setSeller(e.target.value)}}/>
    <Input  type="number" name="CountInStock" placeholder="CountInStock" onChange ={e=>{setCountInStock(e.target.value)}}/>
    <Input  type="text" name="category" placeholder="Categorie" onChange ={e=>{setCategory(e.target.value)}}/>
    <Input  type="file" name="image" onChange ={handleFile} /> 
      <button type="submit">Submit</button>
    </FormContainer>

  );
}

export default AjouterAnnonce;