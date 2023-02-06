import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex flex-col  items-center  ">
      <h1 className="text-5xl font-bold filter text-slate-900 drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default Title;
