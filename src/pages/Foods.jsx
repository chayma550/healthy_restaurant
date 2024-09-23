import React from 'react'

function Foods ({item}) {

  return (
    <div className="menu-items-left">
    {item.map(food=>(
    <div className="menu-item" key={food.id}>
    <img src={food.img} alt="food"/>
       <div>
     <h3>{food.name} <span className="primary-text">{food.price}.000 DT</span></h3>
     <p>{food.des}</p>
     </div>
    </div>
    
    
    ))}
       
         </div> 

  )
}

export default Foods
