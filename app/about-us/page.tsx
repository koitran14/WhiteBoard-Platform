"use client"

import Punchline from "./_components/Punchline";
import Intro from "./_components/Introduce-member";
import Value from "./_components/Value";
import GetStart from "./_components/Getstart";
import { 
    useState,
    useEffect,
    useRef,
} from "react";

const images = [
  "1.svg",
  "2.svg",
  "3.svg",
  "4.svg",
  "5.svg",
  "6.svg",
  "7.svg",
  "8.svg",
  "9.svg",
]

const Page = () => {

  return (
    
    <div>
      <Punchline />
      <Intro />
      <Value />
      <GetStart />
    </div>
  );
};

export default Page;
