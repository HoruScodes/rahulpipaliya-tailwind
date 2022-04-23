import React from "react";
import { Layout } from "../components/Layout";
import { eventsData } from "../data";

const Circle = () => {
  return (
    <div className="col-start-5 col-end-6  md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 mt-3 border-2 border-indigo-600 rounded-full bg-gray-100 shadow"></div>
    </div>
  );
};

const Card = ({ title, range, place, position }) => {
  return (
    <div
      className={`flex ${
        position === "left" ? "flex-row-reverse" : ""
      } sm:contents`}
    >
      {position === "right" && <Circle />}
      <div
        className={`bg-gradient-to-r ${
          position === "left"
            ? "col-start-1 col-end-5 from-[#D8B4FE] to-[#818CF8]"
            : "col-start-6 col-end-10 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
        }   rounded-xl mt-10  p-1`}
      >
        <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
          <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
          <p className="text-gray-600">{range}</p>
          {place && <p className="text-gray-600">@ {place}</p>}
        </div>
      </div>
      {position === "left" && <Circle />}
    </div>
  );
};

const Timeline = () => {
  return (
    <Layout>
      <div className="container pb-6 px-4 mx-auto">
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
            {eventsData.map((element, index) => {
              return (
                <Card
                  {...element}
                  position={index % 2 === 0 ? "left" : "right"}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Timeline;
