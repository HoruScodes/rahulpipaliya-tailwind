import Link from "next/link";
import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6">
      <div className="container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
        <Link href="/">
          <a className="font-medium transition-colors text-gray-900 tracking-wider hover:text-blue-500 uppercase">
            Rahul Pipaliya
          </a>
        </Link>
        <div className="flex space-x-3 text-m">
          <Link href="/#about">
            <a>About</a>
          </Link>
          <Link href="/#about">
            <a>Projects</a>
          </Link>
          <Link href="/#about">
            <a>Work</a>
          </Link>
        </div>
        <p className="flex space-x-3 text-xl">
          <a
            href="https://twitter.com/rahul_pipaliya1"
            className="transition-colors text-gray-900 hover:text-blue-500 cursor-pointer"
            target="_blank"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.instagram.com/rahulpipaliya_"
            className="transition-colors text-gray-900 hover:text-purple-500 cursor-pointer"
            target="_blank"
          >
            <AiOutlineInstagram />
          </a>

          <a
            href="https://github.com/horusCodes"
            className="transition-colors text-gray-900 hover:text-gray-500 cursor-pointer"
            target="_blank"
          >
            <AiOutlineGithub />
          </a>
        </p>
      </div>
    </div>
  );
};
