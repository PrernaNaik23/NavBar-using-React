/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'


const Navbar = ({theme,setTheme}) => {
    const toggle_mode = ()=>{
        theme === 'light'? setTheme('dark') : setTheme('light');
    }
    //after adding this function we have to link this function to the toggle button or toggle img
  return (
    <div className='navbar'>
      <img src={theme === 'light'? logo_light : logo_dark} alt="" className='logo'/>
      <ul className='menu'>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
    <div className="search-box">
        <input type="text" placeholder='Search' />
        <img src={theme === 'light'? search_icon_light : search_icon_dark} alt="" />
    </div>
        <img onClick={()=>{toggle_mode()}} src={theme === 'light'? toggle_light : toggle_dark} alt="" className='toggle-icon' />
    </div>
  )
}
Navbar.propTypes = {
    theme: PropTypes.string.isRequired, // theme prop is a required string
    setTheme: PropTypes.func.isRequired, // setTheme prop is a required function
  };
export default Navbar
