import React from 'react'
import TopBar from './TopBar'
import NavBar from './navigation/NavBar'

const DisplayHeader = () => {
  return (
    <div className='header'>
      <TopBar />
      <NavBar />
    </div>
  )
}

export default DisplayHeader
