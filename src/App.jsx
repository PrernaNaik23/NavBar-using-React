/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const[theme,setTheme]= useState(current_theme? current_theme : 'light'); //checks if the current theme value is present in the local storage

  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme]) //update the value in local storage

  return (
    <div className= {`nav-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/> {/*passing the state variable and setter function into the navbar */}
    </div>
  )
}

export default App
