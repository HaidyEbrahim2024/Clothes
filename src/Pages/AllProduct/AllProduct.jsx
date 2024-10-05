import React from 'react'
import Girls from '../../Components/Girls/Girls'
import Boys from '../../Components/Boys/Boys'
import Games from '../../Components/Games/Games'
import SearchProduct from '../../Components/SearchProduct/SearchProduct'
export default function AllProduct({handelCount}) {
  return (
    <div className=' container AllProduct col-12'>

<SearchProduct/>
 <Girls  handelCount={handelCount}/>
<Boys  handelCount={handelCount}/>
<Games  handelCount={handelCount}/>
 </div>
  )
}
