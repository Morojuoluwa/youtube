import React, { useState } from 'react'
import menu_icon from '../assets/menu.png'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import upload from '../assets/upload.png'
import more_icon from '../assets/more.png'
import notification from '../assets/notification.png'
import profile from '../assets/tom.png'
import { Link } from 'react-router-dom'
const Navbar = ({setSideBar}) => {
    
  return (
    <nav className=' flex items-center py-2 px-[2%] justify-between w-full shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-white sticky top-0 z-10'>
        <div className=' flex items-center'>
            <img src={menu_icon} onClick={()=>setSideBar(prev =>!prev)} className=' w-[22px] mr-[25px]' alt=''/>
            
            <Link to='/'>
                <img src={logo} className=' w-[70px] sm-[130px]' alt=''/>
            </Link>
        </div>
        <div className=' flex items-center'>
            <div className=' flex items-center border-[1px] mr-4 py-2 px-3 rounded-[25px]'>
                <input className=' w-[100px] sm:w-[250px] md:w-[400px] text-black border-none outline-none bg-transparent' type='text' placeholder='search'/>
                <img className=' w-[15px]' src={search} alt=''/>
            </div>
            
        </div>
        <div className=' flex items-center'>
            <img className='navv' src={upload} alt="" />
            <img className='navv' src={more_icon} alt="" />
            <img className='navv' src={notification} alt="" />
            <img className=' max-sm:mr-5 w-[25px] h-[25x] sm:w-[35px] object-cover rounded-[50%]' src={profile} alt="" />
        </div>

        {/* {showTab && (
        <div className=' absolute top-6 bg-green-300 text-white left-0'>

        </div>
    )} */}
    </nav>
  
  )
}

export default Navbar