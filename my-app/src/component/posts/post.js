import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../posts/posts.css";
import { BiGrid } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { RiPriceTag2Fill } from "react-icons/ri";

export const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  console.log(data, "sss");
  return (
    <div className="bg-light ">
      <div className="  container   ">
        <div className="  d-flex justify-content-center ">
          <div className="d-flex  ">
            <BiGrid />
            <p className="taxt1 px-1 ">POSTS</p>
          </div>

          <div className="d-flex  mx-3 px-5 opac ">
            <BiMoviePlay />
            <p className="taxt2 px-1">REELS</p>
          </div>
          <div className="d-flex  opac ">
            <RiPriceTag2Fill />

            <p className="taxt3 px-1">TAGGED</p>
          </div>
        </div>
        <div className="row ">
          <div className=" d-flex thumbnail justify-content-center">
            {data.map((list) => (
              <div key={list.id}>
                <img
                  alt=""
                  style={{ width: "300px", margin: "15px" }}
                  src={list.thumbnailUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
