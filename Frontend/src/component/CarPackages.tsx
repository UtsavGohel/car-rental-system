import { useDispatch, useSelector } from "react-redux";
import { setKmsData } from "../utils/reduxSlice/cars.slice";
import { RootState } from "../utils/carStore";

const CarPackages = () => {
  const dispatch = useDispatch();

  const getKmsValue = useSelector((state: RootState) => state.car.kmsData);

  const data = [
    { distance: 10 },
    { distance: 20 },
    { distance: 30 },
    { distance: 40 },
    { distance: 80 },
    { distance: 120 },
  ];

  const handleDivClick = (distance: number) => {
    dispatch(setKmsData({ dashboardKmData: distance }));
  };

  return (
    <div className="m-10">
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
                item.distance === getKmsValue
                  ? "bg-blue-500 text-white border-blue-500 select-none"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-500 hover:shadow-lg hover:bg-blue-100 cursor-pointer select-none"
              }`}
              onClick={() => handleDivClick(item.distance)}
            >
              <p className="text-center text-sm font-medium">
                {item.distance} Kms
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarPackages;
