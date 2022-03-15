import { FaHome } from 'react-icons/fa';
import { IoCart } from 'react-icons/io';


import React from 'react'

function ButtonIcon(props) {
  const {icons, name} = props;
  console.log(icons)

  return (
    <button className="w-10 h-10 leading-3 text-3xl"><icons.props /><span className="text-xs align-top">{name}</span></button>
  )
}

export default ButtonIcon