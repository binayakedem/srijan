import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin,FaFacebook,FaInstagram ,FaGithubSquare ,FaPhone} from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
const Footer = () => {
    const email1 = 'srijan123@gmail.com';
    const email2= 'srijan@gmail.com';
    const handleEmailClick1 = () => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email1}`);
    };
    const handleEmailClick2 = () => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email2}`);
    };
  return (
    <div className='bg-gradient-to-r from-pink-500 to-blue-500 text-light-gray text-light-gray bg-dark-slate mt-6'>
       <div className=' lg:px-32 md:px-20 px-2'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
          <div className='flex flex-col p-3' >
            <h1 className='text-warm-orange font-bold md:text-2xl text-lg my-1 font-mont'>Quick Links</h1>
            <div className='flex flex-col lg:gap-1 '>
                <NavLink  to="/"className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>News Portal</NavLink>
                <NavLink  to='/skills' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>इमिग्रेसन</NavLink>
                <NavLink   to='/projects' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>गृह पृष्ठ</NavLink>
                <NavLink  to='/experiences'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }> समाचार</NavLink>
                <NavLink  to='/about' className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>साहित्य</NavLink>
                <NavLink  to='/blogs'className={({ isActive }) => `text-light-gray hover:text-warm-orange duration-300 ease-in-out ${  isActive ? 'text-warm-orange font-bold' : ''    }` }>अन्तर्वार्ता</NavLink>
            </div>
          </div>
          <div className='p-3'>
            <h1 className='text-warm-orange font-bold md:md:text-2xl text-lg my-1 font-mont'>Find Us</h1>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row items-center gap-1'>
            <a href="https://www.facebook.com/srijan" target='_blank'> <FaFacebook size={24} color='white'/></a><a href="https://www.facebook.com/binayakdm" target='_blank' className='text-light-gray'> Facebook</a>
              </div>
              <div className='flex flex-row items-center gap-1'>

                 <a href="https://www.instagram.com/srijan/" target='_blank'><FaInstagram size={24} color='white'/></a><a href="https://www.instagram.com/binayalimbuz/" target='_blank' className='text-light-gray'> Instagram</a>
              </div>

            </div>
          </div>
          <div className='p-3'>
            <h1 className='text-warm-orange font-bold md:text-2xl text-lg my-1 font-mont'>Contact Us</h1>
            <div className='flex flex-row gap-2 items-center'>
                <FaPhone color='green'/>
                <p>+977-1234567890</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <FaPhone color='green'/>
                <p>+977-987654321</p>
            </div>
            <div className='flex flex-row gap-2 items-center my-1 '>
            <MdOutlineAttachEmail color='red' onClick={handleEmailClick2}/>
                <p onClick={handleEmailClick2} className='cursor-pointer'>{email2}</p>
            </div>
            <div className='flex flex-row gap-2 items-center my-1 '>
            <MdOutlineAttachEmail color='red' onClick={handleEmailClick1}/>
                <p onClick={handleEmailClick1} className='cursor-pointer'>{email1}</p>
            </div>
          </div>


        </div>
          <div>
            <p className='text-center'>Copyright ©2024 All rights reserved.</p>
          </div>

       </div>

    </div>
  )
}

export default Footer