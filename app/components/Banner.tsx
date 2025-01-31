import React from "react";
import First from "./svg/First";
import Education from "./svg/Education";
import From from "./svg/From";

const Banner = () => {
  const DESKTOP_BASE_WIDTH = 1920; // Original design width
  const DESKTOP_BASE_HEIGHT = 1080; // Original design height
  const vw = (px:any) => `${(px / DESKTOP_BASE_WIDTH) * 100}vw`;
  const vh = (px:any) => `${(px / DESKTOP_BASE_HEIGHT) * 100}vh`;

  return (
    <div className="relative">
      {/* Desktop Background (Original) */}
      <div className="hidden lg:block relative h-screen bg-cover bg-center overflow-hidden"
           style={{
             backgroundImage: `linear-gradient(to bottom, 
               rgba(0, 52, 174, 0) 10%,
               rgba(0, 52, 174, 0.4) 60%,
               #0034AE 90%), 
               url('/images/mainbg.jpeg')`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}>
        
        {/* Register Button */}
        <div className="absolute"
             style={{
               top: vh(52),
               left: vw(1282),
               width: vw(300),
               height: vh(85),
             }}>
          <div className="w-full h-full cursor-pointer font-bold flex items-center justify-center rounded-full bg-[#ADEDEA]"
               style={{ fontSize: vw(24) }}>
            REGISTER NOW
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="absolute cursor-pointer"
             style={{
               top: vh(78),
               left: vw(1632),
               width: vw(48),
               height: vh(32),
             }}>
          <First className="w-full h-full" />
        </div>

        {/* Education SVG */}
        <div className="absolute"
             style={{
               top: vh(223),
               left: vw(604),
               width: vw(712),
               height: vh(293),
             }}>
          <Education className="w-full h-full" />
        </div>

        {/* From SVG */}
        <div className="absolute"
             style={{
               top: vh(675),
               left: vw(725),
               width: vw(470),
               height: vh(28),
             }}>
          <From className="w-full h-full" />
        </div>

        {/* Info Bar */}
        <div className="absolute bottom-0 w-full bg-[#0034AE] py-[5vh]">
          <div className="flex justify-between mx-auto text-white"
               style={{ 
                 width: vw(974),
                 fontSize: vw(16)
               }}>
            {/* Info items */}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, 
               rgba(0, 52, 174, 0) 10%,
               rgba(0, 52, 174, 0.4) 60%,
               #0034AE 90%), 
               url('/images/mainbg.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="flex flex-col h-full p-4">
            {/* Mobile Header */}
            <div className="flex justify-end">
              <div className="w-[9vw] max-w-[40px] aspect-square mt-28">
                {" "}
                {/* Added mt-4 */}
                <First className="w-full h-full" />
              </div>
            </div>
            {/* Mobile Content */}
            <div className="flex-1 flex flex-col gap-10 items-center justify-center">
              <div className="w-full max-w-[85vw] aspect-[2.4/1] mb-8">
                <Education className="w-full h-full" />
              </div>
              <div className="w-full max-w-[65vw] aspect-[16/1]">
                <From className="w-full h-full" />
              </div>
              <div
                className="w-[60vw] max-w-[200px] aspect-[3.2/1]
                    bg-[#ADEDEA] rounded-full flex items-center justify-center
                    text-[clamp(14px,4.5vw,18px)] font-bold text-[#0034AE]
                    mt-10"
              >
                REGISTER NOW
              </div>
            </div>

            {/* Mobile Info Bar */}
            <div className="bg-[#0034AE] py-3  rounded-t-xl">
              <div
                className="flex flex-row items-center justify-between mx-auto gap-3 text-white 
                    text-[clamp(12px,3vw,14px)]"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/images/calendar2-week.png"
                    className="w-[6vw] max-w-[24px]"
                    alt="Calendar"
                  />
                  <span>January 24, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/clock-history.png"
                    className="w-[6vw] max-w-[24px]"
                    alt="Clock"
                  />
                  <span>10:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/geo-alt.png"
                    className="w-[6vw] max-w-[24px]"
                    alt="Location"
                  />
                  <span>Marina Hall, ADNEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Info Bar */}
      <div className="hidden lg:block w-full bg-[#0034AE] py-20">
        <div className="h-[36px] w-[974px] mx-auto text-white flex justify-between">
          <div className="flex items-center gap-[10px]">
            <img
              src="/images/calendar2-week.png"
              className="h-[36px] w-[36px]"
              alt="Calendar"
            />
            <p>January 24, 2023</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="/images/clock-history.png"
              className="h-[36px] w-[36px]"
              alt="Clock"
            />
            <p>10:00 AM - 12:00 PM</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="/images/geo-alt.png"
              className="h-[36px] w-[36px]"
              alt="Location"
            />
            <p>Marina Hall, ADNEC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
