import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-16 py-6 bg-slate-700 text-white ">
      <div>
        <h3 className="text-2xl">Quiz Hunt</h3>
      </div>
      <div className="flex justify-center items-start  mr-20 text-xl">
        <ol className="flex justify-center items-center gap-7 ">
          <Link to="/topic">Topic</Link>
          <Link to="statics">Statics</Link>
          <Link to="blog">Blog</Link>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
