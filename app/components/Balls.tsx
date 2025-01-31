import React from "react";

const Balls = () => {
  return (
    <div className="w-full h-screen bg-[#0034AE] flex flex-col items-center py-10 relative">
      {/* Title Section */}
      <div className="w-full text-center px-4 md:px-0 md:text-left max-w-[469px] md:absolute md:top-[150px] md:left-[240px]">
        <h1 className="font-medium text-[28px] sm:text-[32px] md:text-[48px] text-[#ADEDEA]">
          Event Highlights
        </h1>
        <p className="font-normal text-[16px] sm:text-[18px] md:text-[22px] text-white mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Mobile/Tablet View - Single Image */}
      <div className="w-full h-full md:hidden flex items-center justify-center px-4">
        <img 
          src="/images/gpb.png" // Replace with your actual image path
          alt="Event Highlights"
          className="w-full max-w-[500px] object-contain"
        />
      </div>

      {/* Desktop View - Ball Layout */}
      <div className="hidden md:block w-full max-w-[1600px] min-h-screen md:min-h-[1080px] mx-auto">
        {/* Ball 1 */}
        <div className="absolute w-[200px] h-[200px] sm:w-[340px] sm:h-[340px] 
          md:w-[435px] md:h-[435px] top-[20%] left-[25%] -translate-x-1/2
          md:top-[117px] lg:left-[62%] md:left-[55%] lg:-translate-x-1/2
          bg-white rounded-full flex items-center justify-center p-4 shadow-lg">
          <p className="text-center font-light text-[14px] sm:text-[16px] 
            md:text-[22px]">
            <span className="font-medium">Stakeholder Engagement:</span>
            <br /> A platform to hear from students and educators.
          </p>
        </div>

        {/* Ball 2 */}
        <div className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]
          md:w-[389px] md:h-[389px] top-[40%] left-[60%] md:top-[350px] 
          md:left-[24%] bg-white lg:left-[29%] rounded-full flex items-center justify-center 
          p-4 shadow-lg -translate-x-1/2 md:translate-x-0">
          <p className="text-center font-light text-[14px] sm:text-[16px] 
            md:text-[22px]">
            <span className="font-medium">Immersive Experiences:</span>
            <br /> Leveraging digital-first engagements to enhance learning.
          </p>
        </div>

        {/* Ball 3 */}
        <div className="absolute w-[217px] h-[217px] sm:w-[340px] sm:h-[340px]
          md:w-[431px] md:h-[431px] top-[70%] left-[63%] md:top-[500px] 
          md:left-[75%] transform -translate-x-1/2 bg-white rounded-full 
          flex items-center justify-center p-4 shadow-lg">
          <p className="text-center font-light text-[14px] sm:text-[16px] 
            md:text-[22px]">
            <span className="font-medium">Future Foresight:</span>
            <br /> Insights from research and workshops shaping education.
          </p>
        </div>

        {/* Ball 4 */}
        <div className="absolute w-[160px] h-[160px] sm:w-[250px] sm:h-[250px]
          md:w-[311px] md:h-[311px] lg:top-[200px] top-[23%]  left-[76%] lg:left-3/4 md:top-[170px] 
          md:left-[68%] bg-[#D9D9D9] rounded-full flex items-center justify-center 
          p-4 shadow-lg -translate-x-1/2 md:translate-x-0">
          <p className="text-center font-light text-[14px] sm:text-[16px] 
            md:text-[22px]">
            <span className="font-medium">Brand Identity Reveal:</span>
            <br /> Showcasing the new brand persona.
          </p>
        </div>

        {/* Ball 5 */}
        <div className="absolute w-[148px] h-[148px] sm:w-[230px] sm:h-[230px]
          md:w-[284px] md:h-[284px] top-[62%] md:top-[580px] left-[19%] lg:left-[55%] 
          transform -translate-x-1/2 bg-[#ADEDEA] rounded-full flex items-center 
          justify-center p-4 shadow-lg">
          <p className="text-center font-light text-[14px] sm:text-[16px] 
            md:text-[22px]">
            <span className="font-medium">Strategy Launch:</span>
            <br /> Announcing ECAE's future direction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Balls;