import React from "react";

const Footer = ({ footerAPI }) => {
  return (
    <footer className="bg-theme py-7 ">
      <div className="nike-container text-slate-200 ">
        <div className="flex justify-between ">
          {footerAPI.titles.map((item, index) => (
            <h1 className="flex-1 h-10 text-lg uppercase font-bold" key={index}>
              {item.title}
            </h1>
          ))}
        </div>
        <div className="flex justify-between">
          {footerAPI.links.map((item, index) => (
            <ul className="flex-1" key={index}>
              {item.map((i, idx) => (
                <li className="text-sm py-2" key={idx}>
                  {i.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="text-sm ">
            Copyright<sup className="text-base font-bold">&copy;</sup> All
            Reserved Rights {" "}
            <span className="font-semibold">TRAN DANG HOANG</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
