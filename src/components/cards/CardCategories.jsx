import React from "react";
import helados from "../../assets/Helados.png";
import { NavLink } from "react-router-dom";

function CardCategories(props) {
  
  return (
    <div className="mt-8">
    <NavLink to="/products">
      <div className="grid justify-center mb-9 w-72 h-52 rounded-3xl overflow-hidden shadow-lg border-2">
        <div className=" font-bold text-sm m-2 text-center">
          Alimentos
        </div>
        <img className="flex justify-center w-32 " src={helados} alt="" />
      </div>
      </NavLink>
    </div>
    
  );
}

export default CardCategories;
