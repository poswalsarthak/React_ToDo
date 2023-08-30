import React, { createContext,useState } from 'react'
import ListInput from './components/ListInput'

export const Data = createContext({itemList:"",setItemList:()=>{}});

export default function App() {
  const[itemList,setItemList] = useState([]);
  const value = { itemList, setItemList };

  return (
    <>
    <Data.Provider value={value}>
    <ListInput/>
    </Data.Provider>
    
    </>
  )
}
