import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {color:"black", width:"10rem", height:"1.5rem",margin:"-0.1em",background:"white", opacity:"100%", border:"none", boxshadow:"2px 2px", padding:"0.5rem"};
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