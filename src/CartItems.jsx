import React from "react";
import { FaAnglesUp, FaAnglesDown } from "react-icons/fa6";
import { useGlobalContext } from "./userContext";

const CartItems = ({ id, img, title, price, amount }) => {
    const {remove, increase,  decrease} = useGlobalContext();

    return (
        <article className=" mb-6 flex justify-between  px-4">
            <div className=" flex  items-center">
                <img src={img} alt="" className="w-[8rem]" />
                <div className="text-center space-y-2">
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                    <button onClick={() => remove(id)} className="bg-slate-600 text-white px-8 py-2 rounded-md">remove</button>
                </div>

            </div>
            <div className="mt-8">
                <button onClick={() => increase(id)} className="text-slate-600 " > <FaAnglesUp /> </button>
                <p className="pl-1">{amount}</p>
                <button onClick={() => decrease(id)}  className="text-slate-600"> <FaAnglesDown /> </button>


            </div>

        </article>
    )
}
export default CartItems