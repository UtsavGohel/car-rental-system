import { useState } from "react";

const CarPackages = () => {
  const [selectedDiv, setSelectedDiv] = useState(0);

  const data = [
    { time: "1 hr 10 kms" },
    { time: "2 hr 20 kms" },
    { time: "3 hr 30 kms" },
    { time: "4 hr 40 kms" },
    { time: "8 hr 80 kms" },
    { time: "12 hr 120 kms" },
  ];

  const handleDivClick = (index: number) => {
    setSelectedDiv(index);
  };
  return (
    <div className="m-10">
      {/* Container */}
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-bold text-gray-800">Select Package</h3>
          <p className="text-sm text-gray-600">Based on duration & kms</p>
        </div>

        {/* Scrollable Row */}
        <div className="flex overflow-x-auto space-x-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 p-4 rounded-lg border-2 w-40 transition-all duration-200 ${
                index === selectedDiv
                  ? "bg-blue-500 text-white border-blue-500 select-none"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-500 hover:shadow-lg hover:bg-blue-100 cursor-pointer select-none"
              }`}
              onClick={() => handleDivClick(index)}
            >
              <p className="text-center text-sm font-medium">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarPackages;
