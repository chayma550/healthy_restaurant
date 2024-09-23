/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = ({size, setShow}) => {
  //change navbar color on scroll 
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

//response
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <div className="header">
<nav className={`nav ${scrolling ? 'scrolling' : ''}`}>
      <div className="nav-logo-container">
      <a href="/"><img src={Logo} alt="" /></a> 
      </div>

      <div className="navbar-links-container">
        <Link   to="/" onClick={()=>setShow(true)}  >Home</Link>
        <Link smooth to="#about" onClick={()=>setShow(true)} >About</Link>
        <Link smooth to="#menu"onClick={()=>setShow(true)}  >Menu</Link>
        <Link smooth to="#contact"onClick={()=>setShow(true)}   >Contact</Link>

        <Link to="cart" >
          <BsCart2 className="navbar-cart-icon" onClick={()=>setShow(false)}  />
          <span>{size}</span> 
        </Link>
        <Link to="/booking"  button className="primary-button"onClick={()=>setShow(true)}  >Bookings Now</Link>
      </div>
      
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>






    </div>
  );
};

export default Navbar;
