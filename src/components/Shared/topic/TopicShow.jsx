import React from "react";
import { Link } from "react-router-dom";

const TopicShow = ({ t }) => {
  const { id, name, logo, total } = t;
  return (
    <div className="flex flex-col border border-slate-700 p-7 ">
      <div>
        <div className="flex flex-col items-center justify-between gap-2 ">
          <h2 className="text-xl">{name}</h2>
          <img src={logo} alt="" className=" w-48 h-48 " />
        </div>
        <div className="flex justify-between items-center py-3 text-xl">
          <h4>total: {total}</h4>
          <Link
            to={`/topic/${id}`}
            className="bg-slate-700 text-white rounded-md p-1 hover:bg-slate-200 hover:text-black "
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicShow;
