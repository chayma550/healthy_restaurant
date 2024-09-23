import React from 'react'

function Buttons({menuItems , filterItems }) {
  return (
    <div className="list">
      {
        menuItems.map(food=>(

            <li key={food.id}
            onClick={()=>filterItems(food)}>
             {food}          
            </li>  
        ))
      }
    </div>
  )
}

export default Buttons
