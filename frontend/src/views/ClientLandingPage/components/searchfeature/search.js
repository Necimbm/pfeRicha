import React, {useState} from 'react'
import {Input} from 'antd';


const {Search} = Input;

function SearchFeature(props) {

    const [SeacrhTerms,setSearchTerms]= useState("")
    const onChangeSearch=  (event)=>{
         setSearchTerms(event.currentTarget.value)
         props.refreshFunction(event.currentTarget.value)
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
