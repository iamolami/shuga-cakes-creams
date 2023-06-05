import React from 'react'
import "./styles/App.css"
import Pages from './Pages'
import DisplayHeader from './components/home/header'


const App = () => {
  return (
    <div className='body'>
      <DisplayHeader />
      <Pages />
    </div>
  )
}

export default App
