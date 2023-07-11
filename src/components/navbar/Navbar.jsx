import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3_navbar'>
        <div className='gpt3_navbar-links'>
          <div className='gpt3_navbar-links-logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='gpt3_navbar-links-container'>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#home">Open AI</a></p>
            <p><a href="#home">Case Studies</a></p>
            <p><a href="#home">Library</a></p>
          </div>
        </div>
        <div className='gpt3_navbar-sign'>
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
        <div className='gpt3_navbar-menu'>
          {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/> 
          : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)}
          />}
          {toggleMenu && (
            <div className='gpt3_navbar-menu-container scale-up-center'>
            <div className='gpt3_navbar-menu-container-links'>
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#home">Open AI</a></p>
              <p><a href="#home">Case Studies</a></p>
              <p><a href="#home">Library</a></p>
            </div>
            <div className='gpt3_navbar-menu-container-links-sign'>
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
            </div>            
            )}
        </div>
    </div>
  )
}

export default Navbar