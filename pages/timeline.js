import React from "react";
import { Layout } from "../components/Layout";
import { eventsData } from "../data";

const Circle = () => {
  return (
    <div className="w-6 h-6 absolute top-1/2 mt-3 border-2 border-indigo-600 rounded-full bg-gray-100 shadow"></div>
  );
};

const Right = ({ title, range, place, work }) => {
  return (
    <div className="flex md:contents">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
        </div>
        <Circle />
      </div>
      <div className="col-start-6 col-end-10 rounded-xl mt-10 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
          <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
          <p className="text-gray-600">{range}</p>
          {place && <p className="text-gray-600">@ {place}</p>}
          {work && (
            <ul className="list-outside bg-rose-200">
              {work.map((ele) => (
                <li key={1}>{ele}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const Left = ({ title, place, range, work }) => {
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="col-start-1 col-end-5 rounded-xl mt-10 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]">
        <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
          <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
          <p className="text-gray-600">{range}</p>
          {place && <p className="text-gray-600">@ {place}</p>}
          {work && (
            <ul className="list-outside bg-rose-200">
              {work.map((ele) => (
                <li key={1}>{ele}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
        </div>
        <Circle />
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <Layout>
      <div className="container pb-6 px-4 mx-auto">
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
            {eventsData.reverse().map((element, index) => {
              const { title, place, range, work } = element;
              if (index % 2 === 0) {
                return (
                  <Left
                    title={title}
                    range={range}
                    work={work}
                    place={place}
                    key={index}
                  />
                );
              }
              return (
                <Right
                  title={title}
                  range={range}
                  work={work}
                  place={place}
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
