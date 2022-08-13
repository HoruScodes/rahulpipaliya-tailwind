import Link from "next/link";
import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="top-0 z-10 py-2 md:py-6 md:mb-6">
      <div className="container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
        <Link href="/">
          <a className="font-medium text-gray-900 tracking-wider uppercase hover-with-gradient-text">
            Rahul
          </a>
        </Link>
        <div className="flex md:items-center space-x-5 text-m tracking-wider">
          <Link href="/timeline">
            <a className="hover-with-gradient-text">Experiences</a>
          </Link>
          <Link href="/projects">
            <a className="hover-with-gradient-text">Projects</a>
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
          <a
            href="https://www.linkedin.com/in/rahulpipaliya/"
            className="transition-colors text-gray-900 hover:text-linkedinColor cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </p>
      </div>
    </div>
  );
};
