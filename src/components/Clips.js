import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
const Clips = ({ item }) => {
  return (
    <>
      <div className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300">
        <img
          src={item.imgsrc}
          alt="img/clips"
          className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500"
        />
        <div className="bg-white blur-effect-theme absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-100 z-[100] w-8 h-8 rounded-full flex items-center justify-center ">
          <PlayIcon className="icon-style text-slate-900" />
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
        >
          <source type="video/mp4" src={item.clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
