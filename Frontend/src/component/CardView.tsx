import { useEffect } from "react";
import { ApiConfig } from "../utils/axios/axiosSetup";
import { useDispatch, useSelector } from "react-redux";
import { setDashboardCarData } from "../utils/reduxSlice/cars.slice";
import { RootState } from "../utils/carStore";
import { CarData, CarStateData } from "./interface/car.interface";
import { SearchStateData } from "./interface/search.interface";
// import { SearchStateData } from "./interface/search.interface";

const CardView = () => {
  const dispatch = useDispatch();

  const getKmsValue = useSelector((state: RootState) => state.car.kmsData);

  const payload = useSelector(
    (store: SearchStateData) => store.userSearch.searchValue || {}
  );
  console.log(`🚀 ~ file: CardView.tsx:22 ~ CardView ~ payload:`, payload);

  // Fetch car data on mount
  useEffect(() => {
    const fetchData = async () => {
      const carData = await ApiConfig.post("/car/get-all-cars", {
        city: payload.pickUpLocation,
        pickup_date: payload.pickUpDate,
        pickup_time: payload.pickUpTime,
      });
      dispatch(setDashboardCarData({ dashboardData: carData.data.data }));
      console.log(`🚀 ~ file: CardView.tsx:37 ~ fetchData ~ carData:`, carData);
    };

    fetchData();
  }, [
    dispatch,
    payload.pickUpDate,
    payload.pickUpLocation,
    payload.pickUpTime,
  ]);

  const carDashboardData = useSelector(
    (store: CarStateData) => store.car.carsData
  );

  return carDashboardData?.map((carValue: CarData, index: number) => (
    <div
      className="m-5 block p-4 bg-white border border-gray-200 rounded-2xl shadow-md"
      key={index}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-5">
        <img
          src={carValue.car_image}
          alt="Car Icon"
          className="w-48 h-32 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
        />

        <div className="flex-grow">
          <div className="flex mb-4">
            <h2 className="font-bold text-2xl text-gray-800">
              {carValue.name}
            </h2>
            <div className="flex items-center p-1">
              <span className="bg-green-700 text-white text-lg px-3 py-1 rounded-full">
                {carValue.rating}/5
              </span>

              <span className="text-gray-800 ml-3">
                Available in {carValue.city}
              </span>
            </div>
          </div>
          <div className="text-gray-600 text-sm space-x-2 mb-4">
            <span>{carValue.body}</span>|
            <span className="p-1">{carValue.capacity} Seats</span>|
            <span className="p-1">
              <i className="fas fa-solid fa-fan"></i>
              {carValue.is_ac_car ? " AC" : " NON-AC"}
            </span>
            |
            <span className="p-2">
              {carValue.luggage_capacity} Luggage Bags
            </span>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="text-gray-700 text-sm">
            <span className="font-medium">{getKmsValue} kms </span>
            included |
            <span className="font-medium ml-2">
              {carValue.price_per_km}/km after {getKmsValue || 0} kms
            </span>
            {/* after {carValue.} kms */}
          </div>
        </div>
        {/* Pricing and CTA */}
        <div className="flex flex-col items-center sm:items-end mt-6 sm:mt-0">
          <div className="text-gray-900 font-bold text-2xl mb-1">
            ₹{Number(carValue.price_per_km) * Number(getKmsValue || 0)}
          </div>
          <div className="text-sm text-gray-500 mb-6">
            + ₹58 (other charges)
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  ));
};

export default CardView;
