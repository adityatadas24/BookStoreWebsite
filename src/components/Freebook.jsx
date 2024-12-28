import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {

  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);



  var settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-11/12 mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-justify text-xl pb-2">
          Free Offered Courses
        </h1>
        <p className="text-justify text-sm">
          Unlock free courses with every book purchase! Learn and grow with our
          exclusive, limited-time offer today only.
        </p>
      </div>
      <div >
        {book.length === 0 ? (
          <p>No free books available at the moment.</p>
        ) : (
          <Slider {...settings}>
            {book.map((item) => (
              <div key={item.id} className="px-2" >
                <Cards item={item} key={item.id}/>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Freebook;
