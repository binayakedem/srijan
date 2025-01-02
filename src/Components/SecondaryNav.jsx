import React from 'react'
import { FaLinkedin,FaFacebook,FaInstagram ,FaGithubSquare ,FaPhone} from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
const  SecondaryNav = () => {
    const email= 'काठमाडौं: १२:०४ | Colorodo: 23:19';
    const handleEmailClick = () => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`);
    };
  return (
    <div className=' text-black lg:px-32 md:px-20 px-2'>
        <div className='hidden md:flex md:flex-row md:justify-between md:items-center py-2 '>
            <div className='flex flex-row gap-2 items-center'>
                
                <p>अमेरिकाबाट संचालित अनलाइन पत्रिका</p>
            </div>
            <div className='flex flex-row gap-2 items-center justify-center '>
            <MdOutlineAttachEmail color='red' onClick={handleEmailClick}/>
                <p className='cursor-pointer' onClick={handleEmailClick}>{email}</p>
            </div>
            <div className='flex flex-row gap-4 items-center justify-center'>
                <p>Find me: </p>
                 <a href="https://www.facebook.com/srijan" target='_blank'> <FaFacebook color='blue'/></a>
               
            </div>

        </div>
       
    </div>
  )
}

export default SecondaryNav