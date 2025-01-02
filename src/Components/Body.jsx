import React from 'react'
import data from './data.js'
import { useNavigate } from "react-router-dom";
const Body = () => {
  const navigate = useNavigate();
  const truncateContent = (content) => {
    return content.split(" ").slice(0, 40).join(" ") + "...";
  };
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 py-1 md:py-2 lg:py-4'>
      <div className='overflow-hidden'>
        <img className='h-full w-full object-cover' src="https://www.brtnepal.com/wp-content/uploads/2023/12/Ongoing-logo-advnew.jpg" alt="advertisement" />
      </div>
      <div className='overflow-hidden'>
        <img className='h-full w-full object-cover' src="https://www.brtnepal.com/wp-content/uploads/2023/12/Ongoing-logo-advnew.jpg" alt="advertisement" />
      </div>
      <div className='overflow-hidden'>
        <img className='h-full w-full object-cover' src="https://www.brtnepal.com/wp-content/uploads/2017/12/ezgif.com-gif-maker.gif" alt="advertisement" />
      </div>
    </div>
    <div className='overflow-hidden h-32 w-full'>
      <img className='object-cover h-full w-full' src="https://www.brtnepal.com/wp-content/uploads/2017/12/Biyus-Pradhan-ADV-new1.gif" alt="long" />
    </div>

    {/* news section from here
     */}

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8'>
      
      <div>
      {data.slice(0, 6).map((news) => (
        <div className='p-4 flex flex-col gap-2 md:gap-3 lg:gap-4' key={news.id} style={{ border: "1px solid #ccc",  }}>
       <div className='overflow-hidden h-40 w-full'>
        <img className='h-full w-full object-cover' src={news.image} alt="" />
       </div>
       <div>
            <p
              className="text-xl text-blue-600 font-bold hover:text-blue-700 duration-100 cursor-pointer"
              onClick={() => navigate(`/news/${news.id}`)} // Navigate to detail page
            >
              {news.title}
            </p>
          </div>
       <div><p className='text-black'>{truncateContent(news.content)}</p></div>
       </div>
      ))}
      </div>
      {/* news list */}
      <div>

      </div>
      {/* advertisement */}
      <div>

      </div>

     </div>
    </>
  )
}

export default Body