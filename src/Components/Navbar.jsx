import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
    const [toggle, setToggle]=useState(false)
  return (
    <div className='bg-gradient-to-r from-pink-500 to-blue-500 text-light-gray lg:px-32 md:px-20 px-2 sticky top-0 z-50 font-normal'>
        <div className=' hidden md:flex md:flex-row md:justify-between md:items-center md:py-3 lg:font-semibold '>
            <div className='flex flex-row justify-center items-center'>
                <NavLink className='text-white font-bold p-3 cursor-pointer hover:text-light-gray' to='/'>News Portal</NavLink>
            </div>
            <div className='flex flex-row lg:gap-10 gap-4 '>
                <NavLink  to="/"className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> इमिग्रेसन</NavLink>
                <NavLink  to='/गृहपृष्ठ' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>गृह पृष्ठ</NavLink>
                <NavLink   to='/ समाचार' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> समाचार</NavLink>
                <NavLink  to='/साहित्य'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> साहित्य</NavLink>
                <NavLink  to='/अन्तर्वार्ता' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>अन्तर्वार्ता</NavLink>
                <NavLink  to='/अर्थ-पर्यटन'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>अर्थ-पर्यटनs</NavLink>
                <NavLink  to='/मनोरन्जन'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>मनोरन्जन</NavLink>
            </div>
            <div className='bg-[#F39C12] lg:py-2 rounded-full lg:px-6 md:px-2 md:py-1 hover:bg-yellow-700'>
                <NavLink className='text-white hover:text-white duration-300 ease-in-out flex flex-row justify-center items-center gap-2' to='/contact'>Search<FaSearch /></NavLink>
            </div>

        </div>
        {/* thsis is start for the mobile device navigation */}
        <div className=' md:hidden flex flex-col p-3'>
            <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row justify-center items-center'>
                <NavLink className='text-light-gray font-bold  cursor-pointer hover:text-light-gray' to='/'>News Portal</NavLink>
            </div>
            <div>
            <IoReorderThreeSharp size={34} onClick={()=>setToggle(!toggle)} />
            </div>
            </div>
            <div className={`flex flex-col  gap-2 ${toggle?"":"hidden"}`}>
                <NavLink  to="/"className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> इमिग्रेसन</NavLink>
                <NavLink  to='/गृहपृष्ठ' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>गृह पृष्ठ</NavLink>
                <NavLink   to='/ समाचार' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> समाचार</NavLink>
                <NavLink  to='/साहित्य'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> साहित्य</NavLink>
                <NavLink  to='/अन्तर्वार्ता' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>अन्तर्वार्ता</NavLink>
                <NavLink  to='/अर्थ-पर्यटन'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>अर्थ-पर्यटनs</NavLink>
                <NavLink  to='/मनोरन्जन'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>मनोरन्जन</NavLink>
            </div>
            <div className={`rounded-full mt-4 ${toggle?"":"hidden"}`}>
                <NavLink className='w-1/2 bg-[#F39C12] px-5 py-1 rounded  text-light-gray hover:text-white hover:bg-yellow-700 duration-300 ease-in-out flex flex-row  justify-center items-center gap-2' to='/contact'>Search<FaSearch /></NavLink>
            </div>

        </div>

       
    </div>
  )
}

export default Navbar