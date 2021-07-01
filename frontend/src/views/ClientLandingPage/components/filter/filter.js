import React from 'react'
import './styles.css'

export default function Filter (props){
 const filterClothes=()=>{
props.filter("clothes")
 }
 const filterColiers=()=>{
  props.filter("colier")
}
const filterGlass=()=>{
  props.filter("glass")
}
const filterHouse=()=>{
  props.filter("house")
}


        return (
         
          <nav className="menu">
            <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" onClick={()=>{props.filter("")}} />
            <label className="menu-open-button" for="menu-open">
              <span className="hamburger hamburger-1"></span>
              <span className="hamburger hamburger-2"></span>
              <span className="hamburger hamburger-3"></span>
            </label>
          
            
            <buttton  onClick={filterClothes} className="menu-item"> <i className="fa fa-tshirt"></i></buttton>
            <buttton onClick={filterColiers} className="menu-item"><i className="far fa-gem"></i> </buttton>
            <buttton  onClick={filterGlass} className="menu-item"> <i className="fas fa-wine-glass"></i> </buttton>
            <buttton onClick={filterHouse} className="menu-item"><i className="fas fa-couch"></i> </buttton>
            
          
          </nav>

        )
    }

