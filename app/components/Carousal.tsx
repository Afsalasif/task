import React, { useState } from "react";

const Carousal = () => {
  const images = [
    "/images/event2.png",
    "/images/event1.png",
    "/images/event3.png",
  ];

  const [current, setCurrent] = useState(1);

  return (
    <div className="w-full flex justify-center items-center relative h-[500px] md:h-screen bg-[#064AD2]">
      {/* Title - Adjusted for mobile */}
      <div className="absolute text-center h-6 w-full max-md:top-[30px] top-[50px] md:top-[90px] px-4">
        <h1 className="font-medium text-[48px] md:text-[48px] text-[#ADEDEA]">
          Glimpse from Our Last Event
        </h1>
      </div>

      {/* Image Container - Adjusted height for mobile */}
      <div className="relative w-full max-w-[954px]   h-[200px] sm:h-[228px] md:h-[600px] mx-auto flex items-center">
        {/* Main Image */}
        <div className="w-full h-full rounded-lg overflow-hidden mx-auto">
          <img
            src={images[current]}
            alt={`Event ${current + 1}`}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Dots Navigation - Adjusted for mobile */}
        <div className="absolute max-md:-bottom-10 -bottom-7 left-1/2 transform -translate-x-1/2 flex space-x-2">
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