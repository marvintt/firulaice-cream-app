import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ButtonIcon() {
  return (
    <button className="w-10 h-10 leading-3 text-3xl"><FontAwesomeIcon icon={faHome} /><span className="text-xs align-top">inicio</span></button>
  )
}

export default ButtonIcon