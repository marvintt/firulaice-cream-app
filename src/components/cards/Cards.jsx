import React from 'react'
import helados from "../../assets/Helados.png";
import ButtonFunc from '../buttons/ButtonFunc';

function Cards() {
  return (
    <div className="">
      <div className="grid grid-cols-3 grid-rows-3 items-center justify-center m-2 w-72 h-36 rounded-3xl overflow-hidden shadow-lg border-2">
        <div className="col-span-3 font-bold text-sm text-center">
          Alimentos
        </div>
        <img className='w-20 row-span-2' src={helados} alt="" />
        <div className='col-span-2 text-xs m-1 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos explicabo</div>
        <div className='text-center'>$ 1.000</div>
        <ButtonFunc />
      </div>
    </div>
  )
}

export default Cards