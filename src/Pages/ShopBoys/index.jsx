import React from 'react'
import "./index.scss"
import Boys from '../../Components/Boys/Boys'
import SearchProduct from "../../Components/SearchProduct/SearchProduct"
export default function ShopBoys ({handelCount}) {
  return (
    <div className='ShopBoys container COL-12'>
      <SearchProduct/>
      <Boys  handelCount={handelCount}/>
    </div>
  )
}
