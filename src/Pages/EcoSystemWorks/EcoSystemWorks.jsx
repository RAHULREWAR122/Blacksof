import React from "react";

const EcoSystemWorking = () => {
  return (
    <section className="py-10 font-[poppins] px-4 bg-[#F4F8FB]">
      <div className="about min-h-[60vh] p-6 ">
        <button className="mt-10 bg-gradient-to-l from-white to-indigo-200 py-2 px-4 w-[120px] md:w-[150px] text-[16px] md:text-[24px] font-[poppins]">
          Ecosystem
        </button>
        <p className="font-[poppins] text-[24px] md:text-[42px] w-[90%] md:w-[50%] mt-6 mb-1 ">
          How does a smart street lights ecosystem wroks?
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center w-[100%] relative">
          {/* Top Row */}
          <div className="flex flex-col w-[100%] z-30 gap-2 items-center text-center relative">
            <div className="flex gap-2">
              <div className="rounded-[15px] bg-white p-4 border-2 border-dashed border-[#4C9AFF]">
                <img
                  src="/street_light_controler.png"
                  alt="Street Light Controller"
                  className="w-20 border border-blue-500 border-solid p-3 rounded-[10px] h-20"
                />
              </div>
              <div className="p-4 rounded-[15px] bg-white border-2 border-dashed border-[#4C9AFF]">
                <img
                  src="/street_light_controler.png"
                  alt="Street Light Controller"
                  className="w-20 h-20 border border-blue-500 border-solid p-3 rounded-[10px]"
                />
              </div>
            </div>
            <div className="px-8 w-[80%]">
              <p className="mt-4 font-semibold">Street Light Controller</p>
              <p className="text-sm mt-2">
                Activates/deactivates in response to motion/light sensing and
                controls the brightness of the street lamp.
              </p>
            </div>
          </div>

          <div className="flex flex-col z-30 gap-2 items-center text-center relative">
            <div className="rounded-[15px] bg-white p-4 h-[150px] flex justify-center items-center w-[150px] border-2 border-dashed border-[#4C9AFF]">
              <img
                src="/gateway_png.png"
                alt="Street Light Controller"
                className="w-28 border border-gray-200 border-solid p-3 rounded-[10px] h-28"
              />
            </div>
            <div className="px-8 w-[80%]">
              <p className="mt-4 font-semibold">Gateway</p>
              <p className="text-sm mt-2">
                Employed for interfacing between a Controller and the Lighting
                Management Software.
              </p>
            </div>
          </div>

          <div className="flex flex-col z-30 gap-2 items-center text-center relative">
            <div className="rounded-[15px] bg-white p-4 h-[150px] flex justify-center items-center w-[150px] border-2 border-dashed border-[#4C9AFF]">
              <img
                src="/cloud_based management.png"
                alt="Street Light Controller"
                className="w-28 border border-gray-200 border-solid p-3 rounded-[10px] h-28"
              />
            </div>
            <div className="px-8 w-[80%]">
              <p className="mt-4 font-semibold">
                Cloud-based Management System
              </p>
              <p className="text-sm mt-2">
                Collects information from multiple gateways.
              </p>
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex flex-col items-center text-center md:col-span-1 z-30 relative">
            <div className="rounded-[15px] bg-white p-4 h-[150px] flex justify-center items-center w-[150px] border-2 border-dashed border-[#4C9AFF]">
              <img
                src="/users_png.png"
                alt="Users"
                className="w-28 border border-gray-200 border-solid p-3 rounded-[10px] h-28"
              />
            </div>
            <div className="px-8 w-[80%]">
              <p className="mt-4 font-semibold">Users</p>
              <p className="text-sm mt-2">
                Data from the cloud is used to monitor and control street
                lights.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:col-span-1 relative mt-6 z-30">
            <div className="rounded-[15px] bg-white p-4 h-[150px] flex justify-center items-center w-[150px] border-2 border-dashed border-[#4C9AFF]">
              <img
                src="/evaluation_png.png"
                alt="Evaluation"
                className="w-28 border border-gray-200 border-solid p-3 rounded-[10px] h-28"
              />
            </div>
            <div className="px-8 w-[80%]">
              <p className="mt-4 font-semibold">Evaluation</p>
              <p className="text-sm mt-2">
                Gathered insights are used to evaluate the performance of the
                system.
              </p>
            </div>
          </div>

          <div className="absolute inset-6 w-[84%] left-[10%] z-20 hidden md:block">
            <div className="border-dashed border-gray-400 border-b-2 absolute w-[33%] top-[8%] left-[16.7%]"></div>
            <div className="border-dashed border-gray-400 border-b-2 absolute w-[33%] top-[8%] left-[50%]"></div>


            <div className="border-dashed border-gray-400 border-b-2 absolute w-[30%] bottom-[28%] left-[14%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSystemWorking;
