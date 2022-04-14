import React, { useState } from "react";
import topup from "../Apis/topupApi";

const TopUp = () => {
  const [topupApi, setTopupApi] = useState(topup);
  return (
    <>
      <div>
        <h1 className="text-center my-4 text-4xl font-semibold">
          New Game <span className="text-green-700">Top-Up</span>
        </h1>
        <div className=" grid lg:grid-cols-6 grid-cols-2 gap-5 px-10 mt-20 my-10">
          {topupApi.map(({ id, image, title }) => {
            return (
              <a href="#">
                <div
                  key={id}
                  className="text-center space-y-2 overflow-hidden rounded-md shadow hover:shadow-md pb-2"
                >
                  <img src={image} className="" alt="freefire" />
                  <h1 className="">{title}</h1>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopUp;
