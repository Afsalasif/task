import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#0034AE] min-h-screen relative py-20">
      {/* Desktop Layout (unchanged) */}
      <div className="hidden lg:block">
        <div className="relative container mx-auto px-4 flex flex-col lg:flex-row justify-between">
          {/* Left Column - Mobile First */}
          <div className="w-full mt-10 lg:mt-20 lg:w-1/2 order-1 lg:order-none">
            <h1 className="text-[#ADEDEA] font-[500] text-[32px] md:text-[48px] mb-6 md:mb-8 leading-[1.2]">
              Event Overview
            </h1>

            <div className="mb-8 md:mb-10">
              <p className="text-white font-[300] text-[18px] md:text-[25px] leading-[28px] md:leading-[35px] text-justify">
                The Education First Forum welcomes you back to its second
                edition on January 24th, 2024, aligning with the International
                Day of Education continuing ECAE’s commitment to advancing
                education.
              </p>
              <p className="mt-4 md:mt-5 text-white font-[300] text-[18px] md:text-[25px] leading-[28px] md:leading-[35px] text-justify">
                This flagship event, inaugurated last year on January 24, 2023
                under the theme “Power of Educators” brought together over 200
                stakeholders to engage in human-centric design and co-creation
                sessions, the findings of which significantly shaped strategies
                to advance the UAE's education sector in alignment with the
                Centennial 2071 vision.
              </p>
            </div>

            <div className="w-full max-w-[300px] md:w-[380px] h-[60px] md:h-[68px] flex items-center justify-center rounded-[100px] p-4 bg-[#ADEDEA] hover:bg-[#9cddda] transition-colors mx-auto lg:mx-0">
              <a
                href="#"
                className="text-[#0034AE] font-bold text-base md:text-lg"
              >
                DOWNLOAD 2023 REPORT
              </a>
            </div>
          </div>

          {/* Right Column - Mobile Second */}
          <div className="w-full lg:w-1/2 relative order-0 lg:order-none mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-12 lg:ml-16 lg:-mt-10">
              {/* Image Container */}
              <div className="relative w-full max-w-[600px] mx-auto">
                {/* First Image */}
                <div className="w-[70px] md:w-[105px] h-[100px] md:h-[150px] opacity-50 ml-4">
                  <img
                    src="/images/lay2.png"
                    className="w-full h-full object-cover"
                    alt="Layout preview"
                  />
                </div>

                {/* Second Image */}
                <div className="w-full h-auto aspect-[670/960] flex opacity-80 relative items-center justify-center -mt-[50px] md:-mt-[150px]">
                  <img
                    src="/images/lay.png"
                    className="w-full h-full object-cover"
                    alt="Layout preview"
                  />

                  {/* Text Overlay */}
                  <div className="w-[80%] md:w-[505px] h-auto md:h-[264px] text-white p-4 md:p-6 absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <p className="font-[300] text-[16px] md:text-[25px] leading-[24px] md:leading-[35px] text-center">
                      ECAE is now poised to unveil its new strategy and brand
                      identity at this year's event under the overarching theme:
                      ‘From Ask to Action’. This encapsulates our journey,
                      emphasizing the progression from initial inquiries and
                      insights to tangible strategies and transformative
                      actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Section */}
        <div className="container mx-auto px-4 mt-12 md:mt-20">
          <div className="w-full overflow-hidden relative rounded-[20px] md:rounded-[30px] aspect-[16/9] max-h-[500px] md:max-h-none">
            <img
              src="/images/banner1.png"
              className="h-full w-full object-cover opacity-50"
              alt=""
            />
            <div className="w-[95%] md:w-[1354px] top-[35%] left-[2.5%] md:left-[3%] absolute h-[60%] md:h-[487px]">
              <img
                src="/images/player.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full mt-6 md:mt-10 justify-between">
            <div className="w-full md:w-[75%] mb-6 md:mb-0">
              <p className="font-[400] text-white text-left text-[16px] md:text-[24px] leading-[24px] md:leading-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="w-[160px] md:w-[230px] h-[110px] md:h-[158px] mx-auto md:mx-0">
              <img
                src="/images/lay3.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (only visible < 1024px) */}
      <div className="lg:hidden container mx-auto px-4">
        {/* Reordered Content */}
        <div className="w-full mt-10">
          <h1 className="text-[#ADEDEA] font-[500] text-[36px] mb-6 leading-[42px]">
            Event Overview
          </h1>

          <div className="mb-8">
            <p className="text-white font-[300] text-[18px] leading-[28px] text-justify">
              The Education First Forum welcomes you back to its second edition
              on January 24th, 2024, aligning with the International Day of
              Education continuing ECAE’s commitment to advancing education.
            </p>
            <p className="mt-4 text-white font-[300] text-[18px] leading-[28px] text-justify">
              This flagship event, inaugurated last year on January 24, 2023
              under the theme “Power of Educators” brought together over 200
              stakeholders to engage in human-centric design and co-creation
              sessions...
            </p>
          </div>

          <div className="w-full max-w-[300px] h-[60px] flex items-center justify-start rounded-[100px] p-4 bg-[#ADEDEA] mb-12 mr-auto">
            <div className="w-full flex justify-center items-center"><a href="#" className="text-[#0034AE]  font-bold text-base">
              DOWNLOAD 2023 REPORT
            </a></div>
          
          </div>
        </div>

        {/* Mobile Image Section */}
        {/* Mobile Image Section */}
        <div className="w-full relative">
          <div className="w-[70px] h-[100px] opacity-50 ml-4">
            <img
              src="/images/lay2.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Image Container */}
          <div className="w-full aspect-[2/3] relative -mt-[20px] min-h-[400px]">
            <img
              src="/images/lay.png"
              className="w-full h-full object-contain" // Changed to object-contain
              alt=""
            />

            {/* Text Overlay */}
            <div className="absolute top-[35%] left-[54%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] p-2">
              <p className="text-white font-[300] text-[13px] leading-[18px] text-center">
                ECAE is now poised to unveil its new strategy and brand identity
                at this year's event under the overarching theme: ‘From Ask to
                Action’. This encapsulates our journey, emphasizing the
                progression from initial inquiries and insights to tangible
                strategies and transformative actions.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Next Section */}
        <div className="mt-12">
          <div className="w-full aspect-[16/9] rounded-[20px] overflow-hidden relative">
            <img
              src="/images/banner1.png"
              className="w-full h-full object-cover opacity-50"
              alt=""
            />
            <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-[95%] h-[60%]">
              <img
                src="/images/player.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <p className="text-white text-[16px] leading-[24px] mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
            <div className="w-[160px] h-[110px]">
              <img
                src="/images/lay3.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
