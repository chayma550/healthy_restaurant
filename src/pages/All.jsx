import React from 'react'
import Work from '../pages/Work'
import Test from "../pages/Test"
import About from "../pages/About";
import FoodMenu from "../pages/PopularFood"

import Offer from "../pages/Offer"
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Menu from "../pages/Menu";

const All = () => {
  return (
    <div>
   <About/> 
  <FoodMenu/>  
  <Offer/>
      <Menu/>
   <Test/>
   <Gallery/>
   <Work/>
    <Contact/> 



    </div>
  )
}

export default All