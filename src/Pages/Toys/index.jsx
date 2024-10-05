
import React from 'react'
import "./index.scss"
import Games from '../../Components/Games/Games'
export default function Toys({handelCount}) {
  return (
    <div className='Toys col-12'>
      <Games  handelCount={handelCount}/>
    </div>
  )
}

