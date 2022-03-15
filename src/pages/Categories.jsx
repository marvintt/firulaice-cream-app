import React from 'react'
import CardCategories from '../components/cards/CardCategories'


function Categories() {
  return (
    <div className='grid justify-center'>
      <CardCategories name='Alimentos'/>
      <CardCategories name='Accesorios'/>
    </div>
  )
}

export default Categories