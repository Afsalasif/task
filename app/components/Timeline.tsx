import React from "react";

const Timeline = () => {
  return (
    <div className="w-full text-white bg-[#00236F]">
      {/* Responsive Desktop Version */}
      <div className="hidden md:block min-h-screen py-12">
        <div className="max-w-7xl mx-auto relative px-4 xl:px-8">
          <h1 className="text-4xl lg:text-5xl font-medium text-[#ADEDEA] mb-12 ml-[200px]">
            Event Agenda
          </h1>

          {/* Timeline Line */}
          <div className="absolute md:left-[110px] lg:left-[125px] w-1 h-[1650px] bg-gradient-to-b from-[#ADEDEA] to-[#8AAAF5]"></div>

          {/* Image Decoration */}
          <div className="absolute right-0 md:top-[70%] lg:top-[45%] w-[35vw] max-w-[669px] opacity-10">
            <img
              src="/images/Vector.png"
              className="h-full w-full object-contain"
              alt=""
            />
            
          </div>

          {/* Timeline Items Container */}
          <div className="relative ml-[200px] space-y-24">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute w-8 h-8 rounded-full bg-[#ADEDEA] -left-[120px] top-1/2 -translate-y-1/2"></div>

                {/* Content */}
                <div className="w-full">
                  <h2 className="text-xl lg:text-2xl font-medium text-[#ADEDEA]">
                    {item.time}
                  </h2>
                  <p className="text-base lg:text-lg font-light mt-2">
                    {item.description.split(": ").map((part, i) => (
                      <span key={i}>
                        {i === 0 ? (
                          <span className="font-medium">{part}:</span>
                        ) : (
                          part
                        )}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="md:hidden py-12 px-4 relative min-h-screen">
        <h1 className="text-4xl  font-medium text-[#ADEDEA] text-center mb-12">
          Event Agenda
        </h1>
        <div className="w-[247px] h-[355.33px] top-[72%] left-[33%] opacity-30 absolute ">
          <img
            src="/images/Vector.png"
            className="h-full w-full opacity-[100%] object-contain"
            alt=""
          />
        </div>

        {/* Timeline Line */}
        <div className="absolute left-12 -translate-x-1/2 w-1 h-[1180px] bg-gradient-to-b from-[#ADEDEA] to-[#8AAAF5]"></div>

        {/* Timeline Items */}
        <div className="relative space-y-16">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative pl-12 ml-8">
              {/* Timeline Dot */}
              <div className="absolute w-8 h-8 rounded-full bg-[#ADEDEA] -left-4 top-2"></div>

              {/* Content */}
              <div className="space-y-2">
                <h2 className="text-xl font-medium text-[#ADEDEA]">
                  {item.time}
                </h2>
                <p className="text-base font-light">
                  {item.description.split(": ").map((part, i) => (
                    <span key={i}>
                      {i === 0 ? (
                        <span className="font-medium">{part}:</span>
                      ) : (
                        part
                      )}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const timelineItems = [
  {
    time: "9:30 AM to 10:00 AM",
    description: "Registration, Networking",
  },
  {
    time: "10:00 AM to 11:00 AM",
    description: "Immersive Experiences Walk Through",
  },
  {
    time: "11:00 AM to 11:10 AM",
    description: "Opening Ceremony",
  },
  {
    time: "11:10 AM – 11:20 AM",
    description:
      "Keynote Address: Her Excellency Sarah bint Yousef Al Amiri, Minister of State for General Education & Advanced Technology, Chairwoman of the College's Board of Trustees",
  },
  {
    time: "11:20 AM – 11:25 AM",
    description: "A Student’s View: Amna Al Mansoori, Grade 12",
  },
  {
    time: "11:25 AM – 11:40 AM",
    description: "Logo Reveal",
  },
  {
    time: "11:40 AM – 11:50 AM",
    description: "Intermission",
  },
  {
    time: "11:50 AM - 12:20 PM",
    description:
      "Presentation: Joint Foresight Research Study with Cambridge University",
  },
  {
    time: "12:20 PM - 12:30 PM",
    description: "Partnership Awards",
  },
  {
    time: "12:30 PM - 12:35 PM",
    description: "Closing Remarks",
  },
];

export default Timeline;
