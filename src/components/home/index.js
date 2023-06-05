import React from 'react'
import Categories from './categories/Categories'
import DisplayBanner from './banner'
import PopularProducts from './products/PopularProducts'
import OurHistory from './history/OurHistory'


const DisplayHomePage = () => {
  return (
    <>
      <DisplayBanner />
      <Categories />
      <PopularProducts />
      <OurHistory />
    </>
  )
}

export default DisplayHomePage
