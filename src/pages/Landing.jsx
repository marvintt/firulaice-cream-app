import React from 'react'
import logo from '../assets/Logo.png'
import Carousel from '../components/carousel/CarouselItems'

function Landing() {
  return (
    <div>
      <div className='flex justify-around py-5 h-80'>
        <img className='object-scale-down' src={logo} alt="" />
      </div>
      <h2 className='text-center text-sm mx-10' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nesciunt corporis eveniet recusandae eligendi earum vel sint blanditiis labore alias, magni, delectus sit laboriosam commodi quasi ipsa repellendus nihil? Provident?</h2>
      <Carousel/>
      
    </div>
  )
}

export default Landing