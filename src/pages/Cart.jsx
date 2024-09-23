import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";



const Cart = ({cart,setCart,handleChange,setShow	}) => {
 const[price,setPrice]=useState(0);

 const handlePrice=()=>{
 let ans=0;
 cart?.map((item)=>(
   ans += item.amount * item.price
   ))
   setPrice(ans);
 }
 
 const handleRemove=(id)=>{
   const arr=cart.filter((item)=>item.id!==id)
   setCart(arr)
 }
 
 useEffect(()=>{
  handlePrice();
})
 

   

  return (
       <section>
      <div className="cart-container" id="cart">
         <h2 className="px-5 p-2">My Shopping Cart</h2>
         <div className="cart">
            <div className="col-md-12 col-lg-10 mx-auto">
              {cart?.map((item)=>(
               <div className="cart-item">
                  <div className="row">
                     <div className="col-md-7 center-item">
                     <img src={item.img} />

                        <h5>{item.name}</h5>
                     </div>

                     <div className="col-md-5 center-item">
                     <div>
                      <button className='cart-but' onClick={()=>handleChange(item, +1)}> + </button>
                      <button  className='cart-but' >{item.amount}</button>
                      <button  className='cart-but' onClick={()=>handleChange(item, -1)}> - </button>
                  </div>
                        <h5>$ <span id="phone-total">{item.price} .000 DT</span> </h5>
                        <button onClick={()=>handleRemove(item.id)} ><AiFillDelete  size={30} /></button>

                     </div>
                  </div>
               </div>
               ))}
   <div className="cart-item">
                  <div className="row g-2">

                     <div className="col-6">
                      
                        <h5>Total Price of your Cart :</h5>
                     </div>

                     <div className="col-6 status">
                       
                        <h5><span id="total-price">{price}.000 DT</span></h5>
                     </div>
                     
                  </div>
               </div>
</div>
</div>
</div>

</section>


  )
}

export default Cart
