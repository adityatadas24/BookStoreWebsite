import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto pt-10 md:px-20 px-4">
        <div className="mt-16 items-center justify-center text-center">
          <h1 className="text-xl md:text-3xl">
          We’re Delighted to Have You at Our {" "}
            <span className="text-pink-500"> BookStore! :)</span>
          </h1>
          <div className="w-11/12 mx-auto text-center mt-6">
            <p className=" text-justify leading-relaxed">
              At our bookstore, we’re passionate about nurturing your love for
              reading and personal growth. For a limited time, enjoy free online
              courses with every book purchase! Whether you want to sharpen
              skills, explore new hobbies, or expand your knowledge, we offer
              courses in tech, design, self-improvement, and business. Each
              course is carefully curated to complement your reading journey.
              Don’t miss this exclusive offer—grab your books today and start
              learning!{" "}
            </p>
          </div>
         
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
