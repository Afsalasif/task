import React, { useState } from "react";

const Carousal = () => {
  const images = [
    "/images/event2.png",
    "/images/event1.png",
    "/images/event3.png",
  ];

  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex justify-center items-center relative h-screen bg-[#064AD2]">
       <div className="absolute w-[955px] h-[37px] left-[241px] top-[90px] ">
      <h1 className="font-[500] text-[48px] leading-[38px]">
        Glimpse from Our Last Event
      </h1>
    </div>
    <div className="w-[1494px] h-[600px] relative mx-auto ">
      {/* Main Image */}
      <div className="abslolute w-[954px]  h-[580px] rounded-lg overflow-hidden top-0 mx-auto">
        <img
          src={images[current]}
          alt={`Event ${current + 1}`}
          
        
          className="rounded-lg w-full object-cover  h-full"
        />
      </div>

      {/* Navigation Buttons */}

      {/* Dots Navigation */}
      <div className="absolute  -bottom-7 mt-5 left-[48%] flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`  cursor-pointer transition-all ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            } ${index === current ? "h-4 w-8 rounded-xl":"w-4 h-4 rounded-full"}`}
          ></div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Carousal;
