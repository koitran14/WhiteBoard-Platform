"use client"

import Image from "next/image";
import Link from 'next/link';

export const TeamMember = ({ name, id, imageSrc }:{ name: string, id: string, imageSrc: string }) => (
    <div className="group relative overflow-hidden">
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      <Link href={`https://github.com/${id}`} className="w-fit h-fit">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={200}
          className="group-hover:scale-125 transition-all duration-500"
        />
      </Link>
      <div className="absolute -bottom-full md:left-3 lg:left-5 group-hover:bottom-24 transition-all duration-500 z-50">
        <p className="text-white lg:text-xl">{name}</p>
      </div>
      <div className="absolute -bottom-full md:left-3 lg:left-5 group-hover:bottom-14 transition-all duration-700 z-50">
        <p className="text-white lg:text-xl">{id}</p>
      </div>
    </div>
  );