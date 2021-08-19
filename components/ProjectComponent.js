import React from "react";
import { Button } from "./Button";
import Image from "next/image";

const getTechnologies = (stack) => {
  return (
    <>
      <h2 className="mt-8 mb-3 text-2xl font-bold">Project Stack</h2>
      <ul className="mb-6">
        {stack.frontend && getStackUl("Front End", stack.frontend)}
        {stack.backend && getStackUl("Back End", stack.backend)}
        {stack.database && getStackUl("Database", stack.database)}
      </ul>
    </>
  );
};
const getStackUl = (stack, technology) => {
  return (
    <li className="relative pl-7 my-3 before:absolute before:bg-gray-300 before:rounded-full before:w-1.5 before:h-1.5 before:left-1 before:top-2">
      <strong className="font-semibold">{stack}</strong> - {technology}.
    </li>
  );
};

export const ProjectComponent = ({ project }) => {
  return (
    <div className="container py-9 px-4 text-lg	mx-auto">
      {" "}
      <div className="flex flex-row items-center">
        <h1 className="w-full font-bold  text-4xl">{project.name}</h1>
        <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex">
          {project.live && (
            <Button color="primary" href={project.live} target="_blank">
              Live
            </Button>
          )}
          {project.url && (
            <Button color="secondary" href={project.url} target="_blank">
              Source
            </Button>
          )}
        </div>
      </div>
      {project.stack && getTechnologies(project.stack)}
      <div className="mt-10 text-gray-900">
        {project.details &&
          project.details.map((line, index) => {
            return (
              <p className="mb-5 leading-7" key={index}>
                {line}
              </p>
            );
          })}
      </div>
      <div className="flex flex-col">
        {project.projectImages && (
          <h2 className="mt-8 mb-3 text-2xl font-bold">Images</h2>
        )}
        {project.projectImages &&
          project.projectImages.map((img, index) => {
            return (
              <div className="pt-10" key={index}>
                <Image
                  src={`/${img}`}
                  alt="project image"
                  width={1}
                  height={1}
                  layout="responsive"
                />
                <p className="text-large text-center text-bold">{index + 1}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
