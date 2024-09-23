import food from "../Assets/food3.png"
import avocado from "../Assets/food1.png"
import bowl from "../Assets/bowl-removebg-preview.png"
import chicken from "../Assets/food5.png"
import Somon from "../Assets/food2.png"
import papper from "../Assets/papper.png"

import saumon from "../Assets/somon.png"

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


export const list=[
  {
    id: 1,
    name: "Egg Toast",
    img: food,
    price:20,
    des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo",
    category: "Breakfast",
    amount: 1,
  },
  {
    id: 2,
    name: "Avocado Toast",
    img: avocado,
    price: 13,
    des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo",
    category: "Breakfast",
    amount: 1,
  },


    
  {
      id: 6,
      name: "chicken  ",
      img: chicken,
      price: 30,
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo",
      category: "Lunch",
      amount: 1,
    },
    
    {
      id: 7,
      name: "Somon Toast ",
      img: Somon,
      price: 30,
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo",
      category: "Lunch",
      amount: 1,
    },

    {
      id: 8,
      name: "Papper Plat ",
      img: papper,
      price: 24,
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo",
      category: "Lunch",
      amount: 1,
    },




    {
      id: 2,
      name: "Saumon ",
      img: saumon,
      price: 30,
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo",
      category: "Lunch",
      amount: 1,
    },
    {
      id: 5,
      name: "Protein Bowl ",
      img: bowl,
      price: 16,
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo",
      category: "Breakfast",
      amount: 1,
    },
  
]
    
  
