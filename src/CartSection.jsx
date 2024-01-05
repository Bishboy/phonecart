import React from "react";
import CartItems from "./CartItems";
import { useGlobalContext } from "./userContext";

const CartSection = () => {
    const {cart, clearCart, total} =useGlobalContext()


    if(cart.length === 0){
        return (
            <section>
                <header className=" py-12 w-[80%] grid gap-20  mx-auto text-center"  >
                    <h1 className="font-bold text-[3rem] text-slate-950">Your Cart</h1>
                    <p className="font-semibold text-[1.5rem] text-gray-400">is currently empty </p>
                </header>
            </section>
        )

    }

    return (
        <section>
            <div className="w-[80%] mx-auto">
                <header className=" py-12 w-[80%] grid gap-20  mx-auto text-center"  >
                    <h1 className="font-bold text-[3rem] text-slate-600">Your Cart</h1>

                </header>
                <div className= "flex flex-col    w-[70%]  mx-auto">
                    {cart.map((items) => {
                        return <CartItems key={items.id} {...items} />
                    }) }
                </div>
                <footer>
                    <hr className="w-[70%] mx-auto"/>
                    <div className="w-[70%] mx-auto">
                        <h2 className="flex justify-between  uppercase mt-2">
                            total <span className="pr-5">{total}</span>
                        </h2>
                    </div>
                    <div className="  py-6-6 flex items-center justify-center">
                        <button className="text-center bg-slate-600  py-3 px-6 rounded-2xl text-white  text-[1.1rem] font-semibold  " onClick={() => clearCart()}> Clear Cart</button>
                    </div>
                </footer>
            </div>


        </section>
    )
}

export default CartSection