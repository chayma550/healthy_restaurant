import React from 'react'

export default function ProductCard({data, handleClick}) {
  return (
    <div className="product-cards" >
    {data.map(item=>(
    <div className=" product-card" key={item.id}>
      <img className='product-card-img' src={item.img} alt=""/>
   <h2 className="product-card-title">{item.name}</h2>
   <p className="product-card-description">{item.des}</p>
       <span className="product-card-price">{item.price }.000 DT</span>
       <button className="add-to-cart" onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
   
    
    
    ))}
        </div>
  )
}
