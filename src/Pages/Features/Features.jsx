import React from "react";

const Features = () => {
  const features = [
    {
      title: "Saves on power consumption & related costs",
      icon: "/qq.png",
    },
    {
      title: "Lowers downtimes",
      icon: "/qq.png",
    },
    {
      title: "Detects power thefts.",
      icon: "/qq.png",
    },
    {
      title:
        "Ensures smart monitoring and control of the street light infrastructure.",
      icon: "/qq.png",
    },
    {
      title:
        "Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.",
      icon: "/qq.png",
    },
    {
      title: "Ensures security in the neighborhood",
      icon: "/qq.png",
    },
  ];

  return (
    <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-[100%] text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-10">
          The platform assists city managers on multiple fronts
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-span-6 md:col-span-2 lg:col-span-2 p-6  min-h-[200px] border-r-2 border-b-2   bg-white transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-12 w-12"
                />
              </div>
              <p className="text-lg font-medium text-gray-900">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
