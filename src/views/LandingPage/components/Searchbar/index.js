import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {color:"black", width:"15rem", height:"2rem",margin:"1rem",background:"white", opacity:"50%", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"trouver votre article"}
    />
  );
}

export default SearchBar;