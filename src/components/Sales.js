import React from "react";
import Title from "./Title";
import Item from "./Item";

const Sales = ({ endpoint, isExists = false }) => {
  return (
    <div className="mt-20 nike-container">
      <Title title={endpoint.title} />
      <div
        className={`mt-7 grid items-center justify-items-center gap-7 ${
          isExists ? "grid-cols-3" : "grid-cols-4"
        }`}
      >
        {endpoint.items.map((item, index) => (
          <Item key={index} {...item} isExists={isExists} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
