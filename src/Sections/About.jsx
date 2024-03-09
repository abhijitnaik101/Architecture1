import React from "react";

const About = () => {
    return (
        <>
            <div className="h-screen w-screen flex justify-center p-5">

                <div className="w-1/3 h-full bg-slate-50 p-5 flex flex-col justify-between items-start">
                    <p className="text-6xl font-semibold">ABOUT US</p>
                    <button className="h-12 w-36 rounded-lg bg-black text-white text-md hover:bg-slate-900">learn more</button>
                    <div className="h-3/4 w-full bg-cover bg-center bg-[url('assets/arch10.jpg')]"></div>
                </div>

                <div className="w-1/3 h-full flex flex-col justify-end">
                    <div className="w-full h-1/3 flex flex-wrap">
                        <AboutStat number={30} topic={"Years of Experience"}/>
                        <AboutStat number={230} topic={"Project Completeted"}/>
                        <AboutStat number={45} topic={"Awards gained"}/>
                        <AboutStat number={100} topic={"Architectural Engineer"}/>
                    </div>
                    <div className="w-full h-2/5 p-5 rounded-lg bg-stone-200">
                        <p className="text-lg">
                            Welcome to our architectural firm, where creativity meets functionality. With a passion for design excellence, we specialize in crafting innovative and sustainable spaces that inspire. Our team of talented architects is dedicated to transforming visions into reality, delivering timeless designs that enrich lives and communities worldwide.
                        </p>
                    </div>
                </div>

                <div className="w-1/3 h-full p-10 bg-slate-50">
                    <div className="w-full h-full bg-cover bg-center bg-[url('assets/arch14.jpg')]">
                        <div className="relative top-5 left-8 font-bold text-xl">WE THINK. WE CREATE.</div>
                    </div>
                </div>
            </div>
        </>
    )
}


const AboutStat = (props) => {

    return (
        <>
            <div className="w-1/2 h-1/2 pl-5 border-[1px] border-slate-300 border-solid p-2 flex justify-start items-center">
                <p className="text-5xl font-bold mr-2">{props.number}</p>
                <p className="text-sm font-semibold w-1/2">{props.topic}</p>
            </div>
        </>
    )
}

export default About;