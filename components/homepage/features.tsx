import Image from "next/legacy/image";

const Features = () => {
    return (
        <div className="flex flex-col gap-y-2 w-full h-full items-center justify-center md:px-2">
            <div className="sm:grid sm:grid-cols-2 flex flex-col gap-y-2 gap-3 md:px-8 px-2 pt-6 w-full h-full">
                <div className=" group w-full ease-in-out overflow-hidden relative flex flex-col items-center col-span-2 transition-all duration-700 hover:scale-[1.025] hover:shadow-md hover:shadow-slate-300 h-72 sm:rounded-t-[50px] rounded-tl-[50px]">
                    <Image
                        alt="test"
                        src='/homepage/features/1.png'
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute w-full h-full sm:opacity-0 transition-all duration-700 sm:group-hover:opacity-100 top-0 left-0 bg-gradient-to-r from-black/70 via:to-transparent to-transparent"/>
                    <div className="text-white w-[70%] sm:group-hover:scale-[1.02] sm:opacity-0 transition-all duration-700 sm:group-hover:opacity-100 absolute top-[44%] left-[10%] z-20">
                        <h1 className="md:text-4xl text-3xl">Collaboration</h1>
                        <p className="text-sm font-light">supplies a real-time workplace with invite features.</p>
                    </div>
                </div>
                <div className=" group w-full ease-in-out overflow-hidden relative flex flex-col items-center transition-all duration-700 hover:scale-[1.025] hover:shadow-md hover:shadow-slate-300 h-72 sm:rounded-bl-[50px]">
                    <Image
                        alt="test"
                        src='/homepage/features/2.png'
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute w-full h-full sm:opacity-0 transition-all duration-700 sm:group-hover:opacity-100 top-0 left-0 sm:bg-gradient-to-r bg-gradient-to-l from-black/60 sm:from-black/70 via:to-transparent to-transparent"/>
                    <div className="text-white w-[70%] sm:group-hover:scale-[1.02] sm:opacity-0 transition-all duration-700 sm:group-hover:opacity-100 absolute top-[40%] sm:left-[10%] right-[10%] z-20">
                        <h1 className="sm:text-3xl text-2xl sm:text-left text-right">Brainstorming</h1>
                        <p className="text-sm font-light sm:text-left text-right">with provided note-taking tools.</p>
                    </div>
                </div>
                <div className=" group w-full ease-in-out overflow-hidden relative flex flex-col items-center transition-all duration-700 hover:scale-[1.025] hover:shadow-md hover:shadow-slate-300 h-72 rounded-br-[50px]">
                    <Image
                        alt="test"
                        src='/homepage/features/3.png'
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute w-full h-full sm:opacity-0 transition-all duration-700 sm:group-hover:opacity-100 top-0 left-0 bg-gradient-to-r from-black/70 via:to-transparent to-transparent"/>
                    <div className="text-white w-[70%] sm:group-hover:scale-[1.02] sm:opacity-0 transition-all duration-700 sm:group-hover:opacity-100 absolute top-[40%] left-[10%] z-20">
                        <h1 className="sm:text-3xl text-2xl">Visualization</h1>
                        <p className="text-sm font-light">with pens, painters and many other drawing tools.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Features;