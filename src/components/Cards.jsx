import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Cards({ item }) {
  const [authUser, setAuthUser] = useAuth();

  function buynow() {
    if (authUser) {
      toast.error("Buy now feature is not available");
    } else {
      toast.error("please login first");
    }
  }
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div
          
          className="card w-82 cursor-pointer h-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-white border border-black bg-slate-50 text-black"
        >
          <figure onClick={() =>
            toast.error(" The info page feature is not available at that time")
          } className="border-x-0 border-b-2 border-black dark:border-white h-full">
            <img
              className="w-11/12 h-[95%] rounded-xl"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="p-3">
            <h2 onClick={() =>
            toast.error(" The info page feature is not available at that time")
          } className="card-title text-[16px]">
              {item.name}
              <div className="badge badge-secondary text-sm">
                {item.category}
              </div>
            </h2>
            <p className="text-[11px] text-[#898989]">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹{item.price}</div>
              <div
                className=" cursor-pointer px-2 rounded-full border-[2px] border-black hover:bg-pink-500 hover:text-white duration-200 text-sm"
                onClick={buynow}
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
