import React from 'react'

const FoodCard = ({item}) => {
  const{name,des,img,price}=item;
  return (
    <div className="product-cards-container"data-aos="zoom-in" >
    <div className=" product-card">
      <img className='product-card-img' src={img} alt=""/>
   <h2 className="product-card-title">{name}</h2>
   <p className="product-card-description">{des}</p>
       <span className="product-card-price">{price }.000 DT</span>
    </div>
    </div>
  )
}

export default FoodCard
