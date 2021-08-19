import Link from "next/link";
import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6">
      <div className="container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between ">
        <Link href="/">
          <a className="font-medium transition-colors text-gray-900 tracking-wider hover:text-blue-500 uppercase">
            Rahul Pipaliya
          </a>
        </Link>
        <div className="flex md:items-center space-x-5 text-m">
          {/* <Link href="/#about">
            <a className="hover:translate-y-px">About</a>
          </Link> */}
          <Link href="/projects">
            <a className="hover:translate-y-px">Projects</a>
          </Link>
          <Link href="/timeline">
            <a className="hover:translate-y-px">TimeLine</a>
          </Link>
          <Button
            color="primary"
            href="https://docs.google.com/document/d/1wzEcJpjWo7SnVH3iFs9vdDuq4ouClF8ozlRPpgmwZ98/edit?usp=sharing"
            target="_blank"
          >
            Resume
          </Button>
        </div>
        <p className="flex space-x-3 text-xl">
          <a
            href="https://twitter.com/rahul_pipaliya1"
            className="transition-colors text-gray-900 hover:text-blue-500 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.instagram.com/rahulpipaliya_"
            className="transition-colors text-gray-900 hover:text-purple-500 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>

          <a
            href="https://github.com/horusCodes"
            className="transition-colors text-gray-900 hover:text-gray-500 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </p>
      </div>
    </div>
  );
};
