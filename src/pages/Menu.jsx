import React,{useState} from 'react'
import Foods from './Foods';
import Buttons from "./Buttons"
import BannerBackground from "../Assets/home-banner-background.png";

import {Data} from "./Data"
 function Menu() {  
  //importer data
  const[Item,setItems]=useState(Data)
  const[query,setQuery]=useState("")


//filtrer data
  const menuItems=[...new Set(Data.map((food)=>food.category))]
  const filterItems=(cat)=>{
  const newItems=Data.filter((newfood)=>newfood.category===cat)
    setItems(newItems)
  }
  return (
    <section> 
     
    <div className='Menu-container'>
    <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      <div className='Menu-title'>
  <h1>Food <span>Menu</span></h1>
  </div> 
  <div className="underline"></div>

   <div className="content">
    <div className="list">
    <Buttons
    menuItems={menuItems}
    filterItems={filterItems}
    setItems={setItems}

    />
    </div>
    
    <div className="menu-items">
     
  <Foods
  item={Item}

  />
     </div>
   </div>
  
</div>
</section>
  )
}
export default Menu
