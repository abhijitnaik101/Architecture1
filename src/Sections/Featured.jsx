import React from "react";
// import image1 from "./assets/arch5.jpg";
const Featured = () => {
    return (
        <>
            <div className="w-full h-[1000px] flex">
                <div className="w-1/3 h-full bg-stone-200 p-5 flex flex-col items-center justify-between">
                    <p className="text-4xl font-semibold">Innovating Spaces, Inspiring Lives.</p>
                    <div className="h-2/4 w-full bg-cover bg-center bg-[url('assets/arch3.jpg')]"></div>
                    <div className="h-1/4 w-[90%] bg-white p-5 rounded-lg outline outline-[1px] outline-offset-2 outline-slate-900 flex flex-col justify-between">
                        <p>Discover the Synergy of Design and purpose with Innovating Space and Inspiring Lives.</p>
                        <button className="h-12 w-36 border-2 border-black text-black hover:bg-black text-sm hover:text-white font-semibold rounded-lg">Learn More</button>
                    </div>
                </div>

                <div className="w-2/3 h-full flex flex-col items-center justify-between px-5">
                    <h1 className="text-4xl font-semibold mb-10">FEATURED PROJECT</h1>
                    <div className="h-auto w-auto flex justify-evenly bg-slate-200 rounded-lg">
                        <button className="mx-3 my-2 h-8 w-32 text-sm font-semibold text-white bg-black rounded-lg">click</button>
                        <button className="mx-3 my-2 h-8 w-32 text-sm font-semibold text-white bg-black rounded-lg">click</button>
                        <button className="mx-3 my-2 h-8 w-32 text-sm font-semibold text-white bg-black rounded-lg">click</button>
                        <button className="mx-3 my-2 h-8 w-32 text-sm font-semibold text-white bg-black rounded-lg">click</button>
                    </div>
                    <div className=" w-full h-4/5 p-5 flex flex-wrap">
                        <Cards image="./src/assets/arch5.jpg" buttonTitle="click"/>
                        <Cards image="./src/assets/arch15.jpg" buttonTitle="click"/>
                        <Cards image="./src/assets/arch10.jpg" buttonTitle="click"/>
                        <Cards image="./src/assets/arch17.jpg" buttonTitle="click"/>
                    </div>
                    <button className="h-12 w-32 my-3 font-semibold hover:text-white border-[1px] border-black hover:bg-slate-900 ">see more</button>
                </div>
            </div>
        </>
    )
}

const Cards = (props) => {
    return (
        <>
            <div className="w-1/2 h-1/2 p-3 flex flex-col justify-between">
                <img src={props.image} alt="No image" className="w-full h-4/5 object-cover rounded-lg"></img>
                <button className="h-12 w-full text-small border-[1px] transition duration-300 hover:bg-slate-900 hover:text-white border-black my-2 rounded-md font-semibold">{props.buttonTitle}</button>
            </div>
        </>
    )
}

export default Featured;