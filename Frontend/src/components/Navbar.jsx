import React, { useState } from 'react'
import { Link, Links, NavLink } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";



function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = ()=>{
        setIsMenuOpen(!isMenuOpen)
    };

    const navItems = [
        {path: "/", title: "Start a search"},
        {path: "/my-job", title: "My jobs"},
        {path: "/salary", title: "Salary Estimate"},
        {path: "/post-job", title: "Post a Job"},
    ]


  return (
  <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <nav className='flex justify-between items-center py-6'>
        
    <span className="text-2xl font-bold text-blue-600 tracking-wide">
    Metrix <span className="text-gray-600 font-semibold text-lg">Job Portal</span>
</span>

        {/* Nav items large devices */}

        <ul className='hidden md:flex gap-12'>
            {navItems.map(({path,title})=>(
                <li key={path} className='text-base text-primary'>
                    <NavLink to={path} className={({isActive})=> isActive ? "active:":""}>
                        {title} 

                    </NavLink>

                </li>
            ))}
        </ul>

        {/* Signup & Login button */}

        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
            <Link to="/login" className='py-2 px-5 border rounded'> Login</Link>
            <Link to="/sigin-up" className='py-2 px-5 border rounded bg-blue text-white '> SIgn up</Link>
        </div>

        {/* Mobile menu */}

        <div className='md:hidden block'>
            <button onClick={handleMenuToggler}>
                {
                    isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/>: <FaBarsStaggered className='w-5 h-5 text-primary'/>
                }
            </button>
        </div>
    </nav>
                
        {/* Navigations for mobile */}

        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "": "hidden"}`}>
        <ul className=' md:flex gap-12'>
            {navItems.map(({path,title})=>(
                <li key={path} className='text-base text-white first:text-white py-1'>
                    <NavLink to={path} className={({isActive})=> isActive ? "active:":""}>
                        {title} 

                    </NavLink>

                </li>
            ))}
            <li className='text-white py-1'><Link to="/login">Log in</Link></li>
        </ul>

        </div>

  </header>
  );
};

export default Navbar 