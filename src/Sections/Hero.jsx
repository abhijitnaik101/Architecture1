import React from "react";
const Hero = () => {
    return (
        <>
            <div className="w-screen h-screen bg-white">

                <div className="w-full h-full flex divide-x-2">
                    <div className="h-full w-1/3 border-solid flex-col justify-between divide-y-2">
                        <div className="w-full h-1/2 p-5">
                            <div className="w-full h-4/5 bg-[url('assets/arch9.jpg')] bg-cover"></div>
                            <p className="h-1/5 w-full p-2">We make your imagination come alive</p>
                        </div>

                        <div className="w-full h-1/2 p-5 ">

                            <p className="text-lg font-semibold">Our Latest Project</p>
                            <div className="w-full h-4/6 bg-cover bg-[url('assets/arch10.jpg')] bg-center rounded-lg"></div>
                            <div className="w-full h-1/6 rounded-lg flex justify-between py-3 px-5 my-2 border-solid border-[1px] border-slate-400">
                                <p>Heritage heights</p>
                                <p>$</p>
                            </div>

                        </div>

                    </div>
                    <div className="h-full w-2/3 flex flex-col justify-start items-center p-5">
                        <div className="w-1/2 text-center text-6xl font-bold">ARCHITECTURE SOLUTIONS</div>

                        <button className="mt-4 h-12 w-32 hover:bg-slate-800 bg-slate-900 rounded-lg text-white text-md">Let's talk</button>

                        <div className="w-4/5 h-3/5 m-10 bg-[url('assets/arch1.jpg')] bg-cover rounded-lg bg-red-300">
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero;