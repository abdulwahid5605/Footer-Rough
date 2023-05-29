import React from "react";
import FootLogo from "../images/footlogo.png";
// import Home from "./Home";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-screen w-screen bg-black py-8">
      {/* link section */}
      <div className="flex flex-cols justify-around  w-full ">
        <div className=" w-1/5 border-gray-400 border-style: solid  border-r-2 border-slate-300">
          <div className="mb-4 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300 cursor-pointer  ">
            <img src={FootLogo} alt="Error" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">About Us</h1>
          <p className="text-white text-xl font-medium">
            Quality Patches is a part of Quality Punch Inc., a digitizing and
            vector art company. Quality Punch has been in business since 2004
            and has won over 50 digitizing awards in USA.
          </p>
        </div>
        <div className="w-1/5 border-style: none solid none none border-r-2 border-gray-400 p-4">
          <h1 className="text-white text-2xl font-normal mb-2 w-full text-center border-style: solid  border-2 border-white py-2">
            Quick Links
          </h1>
          <div className="my-8 mx-8">
            <ul className="text-white font-bold text-xl">
              <li className=" w-1/2 my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Home</a>
              </li>
              <li className="w-1/2 my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">About Us</a>
              </li>
              <li className="w-1/2 my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Resources</a>
              </li>
              <li className="w-1/2 my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Blog</a>
              </li>
              <li className="w-3/4 my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/5 border-style: none solid none none border-r-2 border-gray-400 p-4">
          <h1 className="text-white text-2xl font-normal mb-2 w-full text-center border-style: solid  border-2 border-white py-2">
            Custom Patches
          </h1>
          <div className="my-8 mx-8">
            <ul className="text-white font-bold text-xl">
              <li className=" my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Embroidered Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Chenille Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">PVC Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Sublimated Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Leather Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Applique Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Woven Patches</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/5 border-style: none solid none none border-r-2 border-gray-400 p-4">
          <h1 className="text-white text-2xl font-normal mb-2 w-full text-center border-style: solid  border-2 border-white py-2">
            Style Patches
          </h1>
          <div className="my-8 mx-8">
            <ul className="text-white font-bold text-xl">
              <li className=" my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Airsoft Patches</a>
              </li>
              <li className=" my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Fire Department Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Iron on Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Morale Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Name Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Sports Patches</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Military Patches</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/5 border-style: none solid none none p-4">
          <h1 className="text-white text-2xl font-normal mb-2 w-full text-center border-style: solid  border-2 border-white py-2">
            Style Patches
          </h1>
          <div className="my-8 mx-8">
            <ul className="text-white font-bold text-xl">
              <li className=" my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Keychains</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Lapel Pins</a>
              </li>
              <li className="my-6 hover:bg-gray-400 hover:p-4 hover:ease-in duration-300">
                <a href="">Challenge Coins</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* line */}
      <div className="line h-2 w-full my-10">
        <hr />
      </div>
      {/* copyright details */}
      <div className="grid grid-cols-2  gap-3 text-white text-xl ">
        <div className="font-medium flex justify-start align-center ">
          <p>Copyright © Quality Patches 2023 All Rights Reserved</p>
        </div>
        <div className="flex justify-end align-center ">
          <p>Privacy Policy | Term & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
