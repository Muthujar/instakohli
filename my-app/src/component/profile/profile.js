import React from "react";
import "../profile/profile.css";
import Tick from "../img/tick.png";

import { BsThreeDots } from "react-icons/bs";

export const Profile = () => {
  return (
    <div className="container-fluid bg-light pt-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc5V4a7uDaoNcd4Ygrc1CXyh5XmCKUq0KP8GtWYLLLg&s"
              className="rounded-circle propic "
            />
          </div>
          <div className="col-md-8">
            <div className="d-flex  procenter1 ">
              <p
                className="fs-5
               "
              >
                virat.kohli{" "}
              </p>
              <span>
                <img className="imgy" alt="" src={Tick}></img>
              </span>

              <div>
                <button className="pro1 text-center">Follow</button>
                <button className="pro2  text-center  ">Message</button>
              </div>
              <div className="px-3 fs-4 d-flex justify-content-center">
                <BsThreeDots />
              </div>
            </div>
            <div className="d-flex procenter2 pt-2">
              <p className="">
                <span className="fw-bold">1493</span> posts
              </p>

              <p className="px-4">
                <span className="fw-bold">230M</span> followers
              </p>
              <p className="">
                <span className="fw-bold">262</span> following
              </p>
            </div>
            <div>
              <p className="tag ">
                <span className="fw-bold">Virat Kohli </span>
                <br></br>Carpediem!<br></br>
                <a href="#h" className="decor fw-bold">
                  <span className="">one8.com</span>
                </a>
              </p>
              <p></p>
            </div>
          </div>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
};
