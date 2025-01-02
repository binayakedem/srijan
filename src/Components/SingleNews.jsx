import React from "react";
import { useParams } from "react-router-dom";
import newsData from "./data.js";
import { AiFillLike } from "react-icons/ai";
const SingleNews = () => {
  const { id } = useParams(); // Get the ID from the route
  const newsItem = newsData.find((news) => news.id === parseInt(id)); // Find the news item by ID

  if (!newsItem) {
    return <div style={{ padding: "20px" }}>News not found!</div>;
  }

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{newsItem.title}</h1>
      <p style={{ color: "#555", marginBottom: "10px" }}>
        <strong>Source:</strong> {newsItem.source} | <strong>Date:</strong> {newsItem.date} |{" "}
        <strong>Likes:</strong> {newsItem.likeCount}
      </p>
      <p style={{ lineHeight: "1.6", color: "#333" }}>{newsItem.content}</p>

    </div>
    <div className=" grid  grid-cols-1 md:grid-cols-2  gap-2 md:gap-4 lg:gap-8 ">
        <div className="w-[60vw]">
         <h1>{newsItem.title}</h1>
         <div className="flex flex-row gap-1 md:gap-2 lg:gap-3 items-center">
            <p>Source:</p>
            <p>Date:</p>
            <p className="flex flex-row items-center"><AiFillLike />:</p>
         </div>
        </div>

    </div>
    </>
  );
};

export default SingleNews;
