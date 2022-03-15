import React from 'react'
import ButtonLink from '../components/buttons/ButtonLink'
import Cards from '../components/cards/Cards'

function Products() {
  return (
    <div className='grid justify-center mt-3'>
      <div>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>
      <ButtonLink/>
    </div>
  )
}

export default Products