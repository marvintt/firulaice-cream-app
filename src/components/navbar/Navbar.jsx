import React from "react";
import { FaHome, FaWhatsapp } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-around content-center py-2">        
        <NavLink to="/categories"><button className="w-10 h-10 leading-3 text-5xl "><FaWhatsapp /><span className="text-xs align-top ">Contacto</span></button> </NavLink>
        <NavLink to="/"><button className="w-10 h-10 leading-3 text-5xl "><FaHome /><span className="text-xs align-top ">Inicio</span></button></NavLink>
        <NavLink to="/categories"><button className="w-10 h-10 leading-3 text-5xl "><IoCart /><span className="text-xs align-top ">Catalogo</span></button></NavLink>
    </div>
  );
}

export default Navbar;
