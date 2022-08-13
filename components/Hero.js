import React from "react";
import Image from "next/image";

import { Skills } from "./Skills";
import { GetInTouch } from "./GetInTouch";
import { ProfilePicture } from "./ProfilePicture";

export const Hero = () => {
  return (
    <div className="container pb-6 px-4 mx-auto min-h-full">
      <div className="space-x-5 flex item-center lg:-mx-4 sm:flex-row flex-col">
        <div className="lg:px-4 flex items-center ">
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7701f6] via-[#b303ff] to-[#f90382]  lg:text-4xl font-bold">
            Hello! I am Rahul, a software developer based in Montréal, QC.
          </h1>
        </div>
        <ProfilePicture />
      </div>
      {/* <Skills /> */}
      <GetInTouch />
    </div>
  );
};
