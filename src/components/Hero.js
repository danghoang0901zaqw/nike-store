import React from "react";
import Clips from "./Clips";
import SocialLink from "./SocialLink";

const Hero = ({ heroapi }) => {
  return (
    <div className="relative w-auto h-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] w-auto absolute top-0 left-0 right-0 z-0 opacity-100"></div>
      <div className="relative z-10 opacity-100 flex flex-col items-center justify-center nike-container">
        <div className="flex flex-col items-center justify-center mt-28">
          <h1 className="text-6xl  font-extrabold filter drop-shadow-sm text-slate-200">
            {heroapi.title}
          </h1>
          <h1 className="text-6xl font-extrabold filter drop-shadow-sm text-slate-200">
            {heroapi.subtitle}
          </h1>
          <button className="button-theme bg-slate-200 shadow-slate-200 rounded-xl mt-5">
            {heroapi.btntext}
          </button>
          <div className="mt-10 flex flex-col gap-5 items-center absolute top-[33vh] left-[11%] w-auto h-auto">
            {heroapi.videos.map((item, index) => (
              <Clips key={index} item={item} />
            ))}   
          </div>
          <div className="mt-10 flex flex-col gap-5 items-center absolute top-[33vh] right-[11%] w-auto h-auto">
            {heroapi.sociallinks.map((item, index) => (
              <SocialLink key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="">
          <img
            className="mt-10 w-auto h-[45vh] transitions-theme -rotate-[25deg] cursor-pointer hover:rotate-0 object-fill"
            src={heroapi.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
