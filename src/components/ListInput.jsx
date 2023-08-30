import React, { useContext, useState } from 'react'
import NewItem from './NewItem';
import { Data } from '../App';

export default function ListInput() {
    const[inputvalue,setInputValue] = useState();
    //const[itemList,setItemList] = useState([]);
    const handleChange=(event) => setInputValue(event.target.value);
    const{itemList,setItemList}= useContext(Data); 

    const addEvent=()=> {
        setItemList([...itemList,inputvalue]);
        setInputValue("");
    }

    const removeAll =()=> {
        // const newList = itemList.splice(1); // splice  will delete first ele from array.
        // setItemList(newList);  // creating new list and assigning newlist to itemList ,
        //                       // here i am changing the array data in the App.js 

        setItemList([]); 
    }


  return (
    <div className='listinput'>
      <input name="listinput" type="text" value={inputvalue} onChange={handleChange} />
      <button onClick={addEvent} style={{margin:30}}>+</button>
      <button onClick={removeAll}>Remove All</button>
      {itemList.map((item,i)=>( <NewItem  key ={i} index={i} text={item} />))}  {/* provide each comp with a key  */}
      
    </div>
  )
}
