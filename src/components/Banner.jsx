import React, { useState } from "react";
import banner from "../../public/Banner.png";
import toast from "react-hot-toast";
function Banner() {
  const [emial , setEmail ] = useState('')

  function emialGet(){
    if(emial.trim() !== ""){
    setEmail('')
    toast.success("Send Emial")

    }
  }

  return (
    <>
      <div className="w-11/12 mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 mr-20 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-xl md:text-2xl font-bold max-sm:text-md">
            Welcome! Find All Your Favorite Books In{" "}
              <span className="text-pink-500">ONE PLACE!!</span>
            </h1>
            <p className="text-lg text-justify md:text-[16px] text-gray-500 max-sm:text-sm">
              "Welcome to our bookstore, where every reader can discover
              something special. Explore a wide range of books, from bestsellers
              to timeless classics, tailored for every interest. Whether you're
              looking for fiction, non-fiction, or something new, we’ve got the
              perfect book for you. Start your reading journey today!
            </p>
            <label className="input input-bordered flex items-center gap-2 border-gray-500 bg-slate-50 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" name="email" className="grow" placeholder="Email" value={emial} onChange={(e)=>setEmail(e.target.value)} required/>
            </label>
          </div>
          <button className="btn mt-6 btn-secondary" onClick={emialGet}>Get Started</button>
        </div>
        <div className=" order-1 w-full ml-0 mt-20 md:w-1/2">
          <img
            src={banner}
            className="w-[500px] h-[400px] ml-12 max-md:ml-0 max-md:w-72 max-md:h-80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
