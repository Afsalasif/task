import React from "react";

const Contact = () => {
  const social = [
    { name: "Facebook", icon: "/images/fb.png" },
    { name: "Twitter", icon: "/images/x.png" },
    { name: "Instagram", icon: "/images/ins.png" },
    { name: "LinkedIn", icon: "/images/lin.png" },
    { name: "YouTube", icon: "/images/yt.png" },
    { name: "Google Plus", icon: "/images/lc.png" },
  ];

  return (
    <div className="w-full flex flex-col justify-start pt-20 min-h-screen bg-[#064AD2] px-4 sm:px-6 md:px-10">
      <div className="mb-[50px] md:mb-[100px]">
        <div className="flex items-center justify-center flex-col">
          <div className="flex flex-col w-full max-w-[1440px]">
            <h1 className="font-[500] text-[32px] md:text-[48px] leading-[38px] md:leading-[48px] text-[#ADEDEA] text-center md:text-left">
              Register Now
            </h1>
            <p className="font-[300] mt-4 md:mt-[20px] text-[18px] md:text-[25px] leading-[24px] md:leading-[30px] text-white text-center md:text-left">
              Register now and contribute to shaping the future of education!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-[70px]">
        {/* Form Fields */}
        <div className="flex flex-wrap gap-4 md:gap-[25px] mx-auto w-full max-w-[1440px]">
          {/* First Name */}
          <div className="flex flex-col w-full md:w-[48%]">
            <span className="font-montserrat font-[400] text-[18px] md:text-[22px] text-white mb-2">
              First Name*
            </span>
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-[60px] md:h-[85px] rounded-[50px] bg-[#f0f0ea] border-[1px] px-4 md:px-[20px] text-[16px] md:text-[20px] font-[300] text-[#7C7C7A] outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-full md:w-[48%]">
            <span className="font-montserrat font-[400] text-[18px] md:text-[22px] text-white mb-2">
              Last Name*
            </span>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-[60px] md:h-[85px] rounded-[50px] bg-[#f0f0ea] border-[1px] px-4 md:px-[20px] text-[16px] md:text-[20px] font-[300] text-[#7C7C7A] outline-none"
            />
          </div>
        </div>

        {/* Gender & Position */}
        <div className="flex flex-wrap gap-4 md:gap-[25px] mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col w-full md:w-[48%]">
            <span className="font-montserrat font-[400] text-[18px] md:text-[22px] text-white mb-2">
              Gender*
            </span>
            <input
              type="text"
              placeholder="Gender"
              className="w-full h-[60px] md:h-[85px] rounded-[50px] bg-[#f0f0ea] border-[1px] px-4 md:px-[20px] text-[16px] md:text-[20px] font-[300] text-[#7C7C7A] outline-none"
            />
          </div>

          <div className="flex flex-col w-full md:w-[48%]">
            <span className="font-montserrat font-[400] text-[18px] md:text-[22px] text-white mb-2">
              Position*
            </span>
            <input
              type="text"
              placeholder="Position"
              className="w-full h-[60px] md:h-[85px] rounded-[50px] bg-[#f0f0ea] border-[1px] px-4 md:px-[20px] text-[16px] md:text-[20px] font-[300] text-[#7C7C7A] outline-none"
            />
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center md:justify-start mx-auto w-full max-w-[1440px]">
          <button className="w-full md:w-[300px] h-[60px] md:h-[85px] mb-4 rounded-[50px] bg-[#ADEDEA] font-montserrat text-[16px] md:text-[18px] font-[700] text-[#0034AE]">
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="h-auto md:h-[183px] w-full border-t-[1px] flex flex-col md:flex-row items-center justify-center border-white mt-auto px-4 md:px-0 py-4 md:py-0">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-center">
          <p className="font-[400] text-[18px] md:text-[22px] leading-[24px] md:leading-[30.97px] text-white">
            www.ecae.ac.ae
          </p>

          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
            <p className="font-[400] text-[18px] md:text-[22px] leading-[24px] md:leading-[30.97px] text-white mb-2 md:mb-0 md:mr-2">
              Follow us on:
            </p>

            <div className="flex flex-wrap gap-3">
              {social.map((item, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer items-center justify-center h-[38px] w-[38px]"
                >
                  <img
                    src="/images/cir.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <img
                    src={item.icon}
                    className="absolute mix-blend-plus-darker"
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
