import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import newsData from "./data.js";
import { AiFillLike } from "react-icons/ai";
const SingleNews = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from the route
  const newsItem = newsData.find((news) => news.id === parseInt(id)); // Find the news item by ID

  if (!newsItem) {
    return <div style={{ padding: "20px" }}>News not found!</div>;
  }
  return (
    <div className='px-4 md:px-10 lg:px-20'>
    <div className=" flex md:flex-row flex-col  gap-2 md:gap-4 lg:gap-8 ">
        <div className="md:w-[60vw] flex flex-col ">
         <h1 className="font-bold text-lg md:text-xl  lg:text-3xl py-4">{newsItem.title}</h1>
         <div className="flex flex-row gap-1 md:gap-2 lg:gap-3 items-center py-4">
            <p><span className="font-semibold">Source:</span> {newsItem.source}</p>
            <p><span className="font-semibold">Date:</span> {newsItem.date}</p>
            <p className="flex flex-row items-center"><AiFillLike color="blue"/>: {newsItem.likeCount}</p>
         </div>
         <p className=" text-justify">{newsItem.content}</p>
         <div className="overflow-hidden py-2">
          <img className="h-full w-full object-cover rounded" src={newsItem.image} alt="image" />
         </div>
        </div>
        <div className="md:w-[30vw] py-4">
          <h1 className="font-bold text-2xl text-black bg-blue-400 text-center mb-2 py-1">Hot Topic</h1>
        {newsData.slice(0, 12).map((news) => (
          <div key={news.id} className="flex flex-row md:gap-2 py-2">
            <div className="overflow-hidden h-16 w-32">
              <img className="object-cover h-full w-full" src={news.image} alt="image" />
            </div>
            <div>
              <p className="text-blue-600 hover:text-blue-700 duration-75 cursor-pointer" onClick={() => navigate(`/news/${news.id}`)} >{news.title}  </p>
            </div>
          </div>
         ))}
        </div>

    </div>
    </div>
  );
};

export default SingleNews;
