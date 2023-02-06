import React from "react";

const FlexContent = ({ endpoint, isExists = false }) => {
  return (
    <div
      className={`flex items-center justify-center nike-container py-10 ${
        isExists ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`w-full grid items-center justify-items-start ${
          isExists ? "ml-20" : "mr-20 "
        } `}
      >
        <h1 className="text-gradient font-bold text-4xl ">
          {endpoint.heading}
        </h1>
        <h1 className="text-5xl filter text-slate-900 font-bold drop-shadow-lg">
          {endpoint.title}
        </h1>
        <p className="text-slate-900 my-4">{endpoint.text}</p>
        <a
          href={endpoint.url}
          className="flex items-center justify-center"
          target="__blank"
        >
          <button className="button-theme text-slate-100 bg-slate-900 shadow-slate-900 py-1.5 ">
            {endpoint.btn}
          </button>
        </a>
      </div>
      <div className="w-[60%] flex items-center justify-center relative ">
        <img
          src={endpoint.img}
          alt=""
          className={`w-auto transitions-theme object-fill${
            isExists
              ? "h-60 rotate-6 hover:-rotate-12"
              : "h-72 rotate-[12deg] hover:-rotate-12"  
          }`}
        />
      </div>
    </div>
  );
};

export default FlexContent;
