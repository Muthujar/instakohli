import React from "react";
import "../navbar/navbar.css";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
  return (
    <div className="container-fluid border-bottom position-sticky bg-white fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-2-sm ">
            <img
              className="instaimage"
              alt=""
              src="https://fontmeme.com/images/instagram-new-logo.png"
            />
          </div>

          <div className=" col-md-4 text-left py-2 px-5  ">
            <input className="searchy " type="text" placeholder="Search" />
            {/* <img
              className="iconse"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093658/search-200x200.png"
              height="25"
              alt="img2"  
            /> */}
            <p className="iconse">
              {" "}
              <CiSearch />
            </p>
          </div>

          <div className="col-md-4 text-right col-sm text-center navlast   ">
            <div className="  navlastin d-flex justify-content-center align-items-center  ">
              <button className="but1   text-white border-0">Log in</button>
              <button className=" but2 rounded border-0 bg-transparent  ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
