"use client"

import Image from "next/image";

export const ValueCard = ({ imageSrc, title, description }:{ imageSrc: string, title: string, description: string}) => (
    <div className="border-orange-200 border-8 rounded-lg h-96 w-[350px] bg-orange-300 shrink-0">
      <div className="px-[90px] py-8">
        <Image
          src={imageSrc}
          alt=""
          width={150}
          height={150}
          className="hover:scale-125 transition-all duration-500"
        />
      </div>
      <p className="text-2xl font-sans font-semibold">{title}</p>
      <div className="text-lg py-3 px-2">{description}</div>
    </div>
  );