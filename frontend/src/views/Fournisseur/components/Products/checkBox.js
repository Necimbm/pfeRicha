import React,{useState} from 'react'
import {Checkbox,Collapse} from 'antd';

const {Panel} = Collapse; 
const domaine =[
{
    "_id":1, 
    "name":"Cuire"

},
{
    "_id":2, 
    "name":"Coulis"
},
{
    "_id":3, 
    "name":"Vêtements"
},
{
    "_id":4, 
    "name":"Textille"
},
{
    "_id":5, 
    "name":"Coulis"
}


]

function CheckBox(props) {
const [Checked, setChecked] = useState([])
    const handleToggle = (value)=>{

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        if(currentIndex === -1){
            newChecked.push(value)
        }else {
            newChecked.splice(currentIndex,1)
           
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }
    const renderCheckLists=()=>domaine.map((value, index)=>(
        <React.Fragment key={index}>
            <Checkbox
            onChange={()=>handleToggle(value._id)}
            type="checkbox"
            checked={Checked.indexOf(value._id) === -1 ? false  : true}
            
            />
            <span>{value.name}</span>
        </React.Fragment>
    ))
    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header key="1">
                    {renderCheckLists()}
                </Panel>
            </Collapse>


        </div>
    )
}

export default CheckBox;
