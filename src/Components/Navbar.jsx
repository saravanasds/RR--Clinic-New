import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className=' w-[100%] h-auto flex text-lg font-normal p-6 bg-blue-300 justify-between z-10'style={{ boxShadow: "2px 4px 6px rgb(0,0,0,0.7)" }}>
        <h2 className='w-[30%] p-2'>Logo</h2>
        <ul className='w-[50%] flex justify-around p-2 text-md'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li className=' relative hover:block'><Link to={'/services'}>Services</Link>
            <ul className=' absolute hidden'>
                 <li className='block'><a href="#">Hair Treatment</a></li>
                 <li className='block'><a href="#">Skin Treatment</a></li>
                 <li className='block'><a href="#">Transformation</a></li>
            </ul>
            </li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
        <button className=' bg-pink-600 rounded-full p-2 px-5 text-white font-medium'><Link>Book Appointment</Link></button>
    </nav>
    </>
  )
}

export default Navbar