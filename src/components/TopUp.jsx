import React, { useState } from "react";
import { Link } from "react-router-dom";
import topup from "../Apis/topupApi";

const TopUp = ({ progress }) => {
  const [topupApi, setTopupApi] = useState(topup);
  return (
    <>
      <div className="mt-10">
        <h1 className="lg:ml-10 ml-2  text-4xl font-semibold">
          Top Up
        </h1>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 lg:px-10 px-4 mt-10 my-10">
          {topupApi.map(({ id, image, title, link }) => {
            return (
              <Link to={link} key={id} onClick={progress}>
                <div
                  className=" space-y-2 overflow-hidden pb-2"
                >
                  <img src={image} className="lg:rounded-3xl rounded-2xl" alt="freefire" />
                  <h1 className="lg:text-xl text-sm font-medium">{title}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopUp;
