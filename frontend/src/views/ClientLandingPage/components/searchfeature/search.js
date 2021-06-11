import React, {useState} from 'react'
import {Input} from 'antd';


const {Search} = Input;

function SearchFeature(props) {
    const [SeacrhTerms,setSearchTerms]= useState("")
    const onChangeSearch=  (event)=>{
        props.onChangeSearch(SeacrhTerms);
        setSearchTerms(event.currentTarget.value);
        
    }

    return (
        <div>
            <Search
            value={SeacrhTerms}
            onChange={onChangeSearch}
            placeholder="Chercher ..."
            
            />
        </div>
    )
}

export default SearchFeature
