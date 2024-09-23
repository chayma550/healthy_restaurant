
import Home from "./pages/Home"
import Footer from "./components/Footer"
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import React,{useState} from "react";
import MenuCart from "./pages/MenuCart";


const App=()=> {
  const[cart,setCart]=useState([]);

  const [show,setShow]=useState(true);

  const [warning,setWarning] = useState(false);

  const handleClick =(item)=>{
    let isPresent = false;
    cart.forEach((product)=>{
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      }, 2000);
      return ;
    }
    setCart([...cart, item]);
  }


const handleChange=(item,d)=>{
	let ind=-1;
	cart.forEach((data,index)=>{
		if (item.id===data.id)
          ind=index;
	})
	const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
}
   
{

}


 
  return (
    <div className="app">
   <Navbar  size={cart.length}  setShow={setShow} />
    <Routes>
    <Route path="/" element={<Home/>} />
  
     <Route path="menu" element={<MenuCart handleClick={handleClick}/>}/>    
     <Route path="cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/> 
      <Route path="booking" element={<Booking/>} />
      </Routes>
   

   <Footer/>
      
   </div>
  );
}


export default App;
