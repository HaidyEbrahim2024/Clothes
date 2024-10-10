import React from 'react'
import "./index.scss"
import Herosection from '../../Components/Herosection/Herosection'
import Categories from "../../Components/Categories/Categories"
import TextPopular from "../../Components/TextPopular/TextPopular"
import Part from "../../Components/Part/Part"
import Swiiper from "../../Components/Swiper/Swiper"
// import Photo from '../../Components/Photo/Photo'
// import Bestquality from '../../Components/bestQuality/Bestquality'

// import Swiper from 'swiper'
export default function Homepage() {
  return (
    <div className='Homepage'>
      <Herosection/>
{/* <Photo/> */}
      <Categories/>
      <TextPopular/>
      {/* <Swiiper /> */}
      {/* <Productshero handelCount={handelCount} /> */}
      {/* <Bestquality/> */}
      <Part/>
    </div>
  )
}
