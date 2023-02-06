import React from "react";

const SocialLink = ({ item }) => {
  return (
    <img
      className="w-8 h-8 flex items-center cursor-pointer transition-all duration-300 hover:scale-110"
      src={item.icon}
      alt=""
    />
  );
};

export default SocialLink;
