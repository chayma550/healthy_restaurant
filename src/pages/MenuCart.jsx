import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Data} from "./Data"
import ProductCard from './ProductCard';
export default function MenuCart ({handleClick}) {

    const[query,setQuery]=useState("")
    const[Item,setItems]=useState(Data)
   //search function
      const search=(data)=>{
        return data.filter((item)=>item.name.toLowerCase().includes(query))
      }
        return (
      <div className='Menu-container'>
      <div className='Menu-title'>
  <h1>Food <span>Menu</span></h1>
  </div> 
  <div className="underline"></div>

  <div className="search-bar">
      <div className="search-icon">
      <SearchIcon />
      </div>
  
  <input type="text" className='search'  placeholder='Search Your Food' onChange={(e)=>setQuery(e.target.value)} /> 
  <button className='search-button'>Search</button>
   
    </div>
<ProductCard handleClick={handleClick} data={search(Data)} item={Item}/>
         </div>
    )
}
