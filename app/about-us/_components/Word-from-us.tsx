import React from "react";
import Image from "next/image";

import byus from "@/app/about-us/_assets/byus.svg";
import inspiredword from "@/app/about-us/_assets/Inspiredword.svg";
import halftonefilter from "@/app/about-us/_assets/halftonefilter.svg";
import balance from "@/app/about-us/_assets/balance.svg";


const WordUs = () => {
    return (
        <div className="bg-milkwhite">
            <div className="relative p-[50px] p w-full min-h-screen flex flex-col">
                <div>
                    <div className="absolute z-50 top-[-20px]">
                        <Image
                            src={inspiredword}
                            alt=""
                            width={500}
                        />
                    </div>
                </div>
                    <div className="absolute z-50 left-[650px] top-[207px]">
                        <Image
                            src={balance}
                            alt=""
                            width={600}
                        />
                    </div>
                <div>

                </div>

                <div className="relative bg-darkbluelight flex flex-row w- h-[450px] xl:top-[440px]">
                    <div>
                        <Image
                            src={halftonefilter}
                            alt=""
                            width={600}
                            className="relative top-[-150px]"
                        />
                    </div>
                    <div>
                        <Image
                            src={byus}
                            alt=""
                            width={400}
                            className="relative left-[900px] top-[120px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordUs;