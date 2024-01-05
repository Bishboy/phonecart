import React from "react";
import { FaCartArrowDown } from "react-icons/fa"
import picture from '../src/assets/coloredtransparent 2.png'
import { useGlobalContext } from "./userContext";

const Header = () => {
    const {amount} = useGlobalContext()
    return (
        <nav className="bg-slate-600">
            <div className="flex  justify-between mx-auto w-[80%]">
                <div className="  flex items-center">
                    <img src={picture} alt="" className=" w-[8rem] " />
                    <p className="font-bold text-xl text-blue-400" >Phone services</p>
                </div>
                <div className=" flex flex-col relative items-center">
                    <div className="">
                        <FaCartArrowDown className="text-[4rem] text-white" />
                    </div>
                    <div className="bg-blue-300 text-center w-[3rem] absolute bottom-[1.1rem] left-[0.90rem] rounded-full">
                        <p>{amount}</p>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Header