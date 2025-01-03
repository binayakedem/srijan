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
      <img className='object-cover h-full w-full cursor-pointer hover:scale-110 duration-500 ease-in-out' src="https://www.brtnepal.com/wp-content/uploads/2017/12/Biyus-Pradhan-ADV-new1.gif" alt="long" />
    </div>

    {/* news section from here
     */}

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8'>
      
      <div>
      {data.slice(0, 4).map((news) => (
        <div className='p-4 flex flex-col gap-2 md:gap-3 lg:gap-4' key={news.id} style={{ border: "1px solid #ccc",  }}>
       <div className='overflow-hidden h-40 w-full'>
        <img className='h-full w-full object-cover' src={news.image} alt="" />
       </div>
       <div>
            <p
              className="text-xl text-blue-600 font-bold hover:text-blue-700 duration-100 cursor-pointer"
              onClick={() => navigate(`/news/${news.id}`)} 
            >
              {news.title}
            </p>
          </div>
       <div><p className='text-black'>{truncateContent(news.content)}</p></div>
       </div>
      ))}
      </div>
      {/* news list */}
      <div className='bg-gray-50'>
        <h1 className='text-black font-bold text-xl text-center py-2'>भर्खरै</h1>
      {data.slice(0, 20).map((news) => (
        <div key={news.id} className='px-4 py-4'>
            <p
              className="text-lg text-blue-600 font-semibold hover:text-blue-700 duration-100 cursor-pointer"
              onClick={() => navigate(`/news/${news.id}`)} 
            >
              {news.title}
            </p>
            <hr />
        </div>
         ))}
      </div>
      {/* advertisement */}
      <div>
        <h1 className='text-center font-bold'>Advertisement</h1>
        <div className='overflow-hidden' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <img className='object-cover h-full w-full cursor-pointer hover:scale-110 duration-500 ease-in-out' src="https://www.gingermediagroup.com/wp-content/uploads/2023/10/advertising.jpg" alt="ads" />
        </div>
        <div className='overflow-hidden'>
          <img className='object-cover h-full w-full cursor-pointer hover:scale-110 duration-500 ease-in-out' src="https://www.myhoardings.com/ads/wp-content/uploads/2021/02/de6dr78-4c772bfb-7b6b-4999-aac5-1d2b95df91c1.jpg" alt="ads" />
        </div >
        <div className='overflow-hidden'data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <img className='object-cover h-full w-full cursor-pointer hover:scale-110 duration-500 ease-in-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeJUH5Gp2Mv5NClrCJUbcy8iuwr8ltyFz00oNwMWE15erzCfsnKbUej6hW57niI4O8Eo&usqp=CAU" alt="ads" />
        </div>
        <div className='overflow-hidden'>
          <img className='object-cover h-full w-full cursor-pointer hover:scale-110 duration-500 ease-in-out' src="https://study.com/cimages/multimages/16/burgerad15179945781952220614.png" alt="ads" />
        </div>
        <div className='overflow-hidden' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <img className='object-cover h-full w-full cursor-pointer hover:scale-110 duration-500 ease-in-out' src="https://marketoonist.com/wp-content/uploads/2012/09/burgerking.jpg" alt="ads" />
        </div>
      </div>

     </div>
     <div className='py-4'>
      <h1 className='font-bold text-xl text-center'>साहित्य</h1>
      {data.slice(4, 9).map((news) => (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8' key={news.id} >
        <div className='overflow-hidden h-60' data-aos="zoom-in" data-aos-duration="1200">
          <img className='object-cover h-full w-full cursor-pointer hover:scale-110 duration-500 ease-in-out p-3' src={news.image} alt="" />
        </div>
        <div>
          <h1 className='font-bold text-xl py-4'>{news.title}</h1>
        <p className='text-black'>{truncateContent(news.content)}<p
              className=" text-blue-600  hover:text-blue-700 duration-100 cursor-pointer"
              onClick={() => navigate(`/news/${news.id}`)} 
            >Load more</p></p>
        
        </div>
      </div>
       ))}
     </div>
    </>
  )
}

export default Body