import React from 'react'
import image1 from "../Assets/image1.jpg"
import image2 from "../Assets/image2.jpg"
import image3 from "../Assets/image 3.png"
import image4 from "../Assets/image4.webp"
import image5 from "../Assets/image5.jpg"
import image7 from "../Assets/image7 (2).jpg"



const Galerie = () => {
  return (
  <div className="gellery-container" id="gallery" data-aos="zoom-in">
<div className="gallery-card">
  <div className="title">
  <p div className="primary-subheading">Our Food Gallery</p>
<div className="underline"></div>
  </div>
</div>
<div className="gallery-imgs">
  <img src={image1} alt="image1"/>  
  <img src={image2} alt="image2"/>
  <img src={image7} alt="image7 "/>

  </div>
  <div className="gallery-imgs">

<img src={image3} alt="image3"/>
<img src={image4} alt="image4"/>
<img src={image5} alt="image5"/>



</div>
</div>


    
  )
}

export default Galerie
