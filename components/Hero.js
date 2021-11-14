import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import rahulImg from "../public/rahul.jpg";

export const Hero = () => {
  return (
    <div className="container pb-6 px-4 mx-auto">
      <div className="space-x-5 lg:flex item-center lg:-mx-4">
        <div className="lg:px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
            Hello! I am Rahul, a software engineer based in Montréal, QC.
          </h1>
          <div className="mt-4 text-gray-700">
            <p className="my-2">
              I enjoy developing things that make our life better, whether that
              be websites, applications, or anything in between. My goal is to
              be successful enough to help those who are in need and to
              contribute something to society.
            </p>
            <p className="my-2">
              Shortly after getting my bachelor from from Birla Vishvakarma
              Mahavidyalaya, I joined the engineering team at Srkay Consulting
              Group at my hometown Surat, IN. where I have worked on Scikey as
              associate software developer, which is an ai based startup. after
              working there for over a year, I came to Montréal, Canada to learn
              more at College LaSalle.
            </p>
            {/* <p className="mt-12">
              I am currently looking for full-time opportunities.
            </p>
            <div className="mt-6 space-y-3 md:space-y-0 md:space-x-4 md:flex ">
              <Button
                color="primary"
                href="https://www.linkedin.com/in/rahulpipaliya/"
                target="_blank"
              >
                Linkedin
              </Button>
              <Button
                color="secondary"
                href="https://github.com/horuscodes"
                target="_blank"
              >
                Github
              </Button>
            </div> */}
          </div>
        </div>
        <div className="flex-shrink-0 mt-12 lg:px-4 lg:mt-0">
          <Image
            src={rahulImg}
            alt="Profile"
            placeholder="blur"
            priority={true}
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
          My Skills
        </h1>
        <div className="flex flex-col text-gray-700">
          <p className="my-2">
            Through my studies & side-projects , I have gained a solid
            understanding of computer science and web development concepts, and
            have dedicated a lot of my free time to apply these concepts to
            real-world scenarios and applications.
          </p>
          <ul className="list-inside justify-items-start list-none md:list-disc grid md:grid-cols-4 sm:grid-cols-2 gap-4 my-4">
            <li>ReactJs</li>
            <li>JavaScript(ES6+)</li>
            <li>HTML5/(S)CSS</li>
            <li>Python</li>
            <li>NodeJs</li>
            <li>NextJs</li>
            <li>AngularJs</li>
            <li>PHP & SQL</li>
          </ul>
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
          Get in Touch
        </h1>
        <div className="flex flex-col  flex-start">
          <p className="my-4">
            my inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you! Thank you!.
          </p>
          <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex">
            <Button
              color="primary"
              href="mailto:pipaliya1997@gmail.com"
              target="_blank"
            >
              Mail Me!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
