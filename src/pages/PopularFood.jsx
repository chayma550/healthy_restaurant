import React from 'react'
import{list,responsive} from "./ProductData"
import FoodCard from './FoodCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const PopularFood=()=>{
 
const List=list.map(item=>(
  <FoodCard item={item} key={item.id}/>
     
 ))


  return (
    <div id="menu">
      <div className="food-container">
<div className="food-section-text-container">
<h2 className='food-primary-subheading'>Most Popular food </h2>
<div className="underline"></div>

<a  href="/menu"><span className='span-container'>View More</span></a>
      <Carousel showDots={true} responsive={responsive}>
        {List}
      </Carousel>
      </div>
      </div>
      </div>
  )
  }

export default PopularFood