import React from "react";
import Bird from "../images/bird.webp";

const Home = () => {
  return (
    <div className="p-36 flex flex-row ">
      <div className="flex flex-col items-start justify-center w-3/5">
        <h1 className="text-4xl font-bold text-orange-900 my-6">
          Custom Patches Made Simple!
        </h1>
        <p className="text-xl font-light">
          Customize your own patch with us! Quality Patches offer high-quality
          custom patches to enhance your brand recognition. You can get the
          finest work at Quality Patches if you want to order custom patches
          online.
        </p>
        <div className="my-12">
          <img src={Bird} alt="" />
        </div>
      </div>
      <div className=" h-screen w-2/5 border-2 border-solid border-black "></div>
    </div>
  );
};

export default Home;
