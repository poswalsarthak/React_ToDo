import React,{useContext} from 'react'
import { Data } from '../App';

export default function NewItem({index,text}) {
    const{itemList,setItemList}= useContext(Data);
    const removeEvent=()=>{
        
        const newList = itemList.filter((item)=> item!==itemList[index]); // filter will take each ele from itemList and 
                                                                // chk , if cond. true return it to new array
        setItemList(newList);
    }
    //console.log(index);
  return (
    <div className='newitem'>
      <h3 style={{ display: 'inline-block',height:35,width:300 }}>{text}</h3>
      <button 
      style={{height:25 , width:25 , fontSize:20,textAlign:'center',marginLeft:30}}
      onClick={removeEvent}>-</button>
    </div>
  )
}
