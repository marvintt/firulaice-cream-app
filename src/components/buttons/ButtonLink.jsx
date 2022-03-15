import React from "react";
import { NavLink } from "react-router-dom";

function ButtonLink() {
  return (
    <div className="sticky bottom-12 flex justify-center items-center p-3">
      <NavLink to='/cart'><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md">
        Ir al carrito
      </button>
      </NavLink>
    </div>
  );
}

export default ButtonLink;
