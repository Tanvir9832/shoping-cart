import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='w-full h-[10vh] bg-blue-400 flex items-center justify-between shadow-md'>
        <div className=' text-4xl text-white ml-20'>
            Shopping
        </div>
        <div className='flex gap-8 text-lg mr-20 items-center'>
            <Link to="/" >Home</Link>
            <Link to="/store" >Store</Link>
            <Link to="/about">About</Link>
            <div >
                <FaShoppingCart className='absolute text-2xl p-1 w-[35px] border-black h-[35px] border-2 rounded-full' />
                <p className='relative text-white top-4 left-6 bg-red-500 rounded-full '>0</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar