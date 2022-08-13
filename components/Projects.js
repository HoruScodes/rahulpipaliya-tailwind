import React from "react";
import Link from "next/link";
import cx from "clsx";
import Tilt from "react-parallax-tilt";
import { Screen } from "../components/Screen";
import Image from "next/image";

const getProjectUrl = (url, name) => {
  return (
    <div className="mt-3">
      <Link href={url} className="font-medium text-gray-800">
        <a>{name}</a>
      </Link>
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <>
      <Link href={`/projects/${project.id}`}>
        <a className={cx("block")}>
          <div>
            {project.image ? (
              <Tilt
                transitionSpeed={10000}
                tiltMaxAngleY={8}
                tiltMaxAngleX={8}
                scale={1.01}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareBorderRadius="11px"
              >
                <Screen>
                  <div style={{ fontSize: 0 }}>
                    <Image
                      src={`/images/${project.image}`}
                      alt="Project Preview"
                      width={500}
                      height={300}
                      priority={true}
                    />
                  </div>
                </Screen>
              </Tilt>
            ) : null}
          </div>
        </a>
      </Link>
      <p className="mt-6 text-xl font-bold text-gray-800">{project.name}</p>
      <p className="mt-2 text-gray-800 line-clamp-2">{project.description}</p>
    </>
  );
};

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Covid-19 Tracker",
      description: "A simple web app to track the progress of COVID-19",
      image: "project1.jpg",
      github: "https://github.com/HoruScodes/covid-19-tracker",
      live: "https://covid-19-tracker-7d459ftmv-horuscodes.vercel.app/",
    },
    {
      id: 2,
      name: "Chef Help",
      description:
        "aimed to break the barrier restaurant workers are facing by prioritizing menu items by their cook time.",
      image: "project2.jpg",
      github: "https://github.com/HoruScodes/covid-19-tracker",
      live: "https://github.com/HoruScodes/covid-19-tracker",
    },
    {
      id: 3,
      name: "Make My Cuisine",
      description:
        "Make My Cuisine Is Unique Application That finds matching recipes by addding your available ingredients and a practical way to save money. Take full advantage of ingredients you already have, and naturally buy less groceries.",
      image: "project3.jpg",
      github: "https://github.com/HoruScodes/covid-19-tracker",
      live: "https://github.com/HoruScodes/covid-19-tracker",
    },
    {
      id: 4,
      name: "BooksMTL",
      description:
        "Built an E-commerce web-app for Users in Montreal to buy and sell old books, later added support to add other items.",
      image: "project4.jpg",
      github: "https://github.com/HoruScodes/covid-19-tracker",
      live: "https://github.com/HoruScodes/covid-19-tracker",
    },
  ];
  return (
    <div className="container px-4 mb-10 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
      <h4 className="mt-2 text-gray-500">
        Some of the side projects I am currently working on.
      </h4>
      <div className="-mt-2 lg:flex lg:flex-wrap lg:-mx-6">
        {projects.map((project, index) => {
          return (
            <div key={index} className="mt-12 lg:w-1/2 lg:px-6">
              <Project
                project={{
                  id: project.id,
                  name: project.name,
                  description: project.description,
                  image: project.image,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
