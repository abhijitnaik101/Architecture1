import React from "react";
import DropDown from "../Component/DropDown";

const Info = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="flex flex-col w-1/3 h-full bg-slate-100">
                    <div className="font-semibold text-4xl ">MARVELOUS: MODERN LIFE LIVES HERE</div>
                    <div></div>
                </div>

                <div className="flex flex-col w-1/3 h-full p-5 bg-slate-100">
                    <div className="h-4/5 w-full bg-cover bg-[url('assets/arch11.jpg')]"></div>
                </div>

                <div className="flex flex-col w-1/3 h-full p-5">
                    <div className="h-2/5 w-full bg-stone-200"></div>
                    <div className="h-3/5 w-full py-5">
                        <DropDown/>
                        <DropDown/>
                        <DropDown/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Info;