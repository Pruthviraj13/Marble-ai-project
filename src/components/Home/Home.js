import React from 'react'
import Navbar from '../Navbar/navbar'
import Search from '../Search/search'
import Button from '../Buttons/btns.js'
// import Temp from '../Temp/Temp'
// import Sidebar from '../Sidebar/sidebar'
// import Scroller from '../Scroller/scroller'
import './default.css';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Button/>
        {/* <Temp/> */}
      <Search/>
    </>
  )
}

export default Home
