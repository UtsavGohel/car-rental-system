const carData = {
  name: "Swift or similar",
  rating: "4.3/5",
  totalRatings: "64 ratings",
  price: 347,
  location: "Rental Cab in Noida",
  image: "https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/hatchback.png",
  type: "HATCHBACK",
  seats: 4,
  ac: true,
  luggage: 1,
  distanceIncluded: 10,
  ratePerKm: 8.88,
};

const CardView = () => {
  return (
    <div className="m-5 block p-4 bg-white border border-gray-200 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {/* Car Image */}
        <img
          src={carData.image}
          alt="Car Icon"
          className="w-48 h-32 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
        />
        {/* Car Details */}
        <div className="flex-grow">
          <div className="flex mb-4">
            <h2 className="font-bold text-2xl text-gray-800">{carData.name}</h2>
            <div className="flex items-center p-1">
              <span className="bg-green-700 text-white text-lg px-3 py-1 rounded-full">
                {carData.rating}
              </span>
              <span className="text-gray-500 ml-3">{carData.totalRatings}</span>
              <span className="text-gray-800 ml-3">{carData.location}</span>
            </div>
          </div>
          <div className="text-gray-600 text-sm space-x-2 mb-4">
            <span>{carData.type}</span>|
            <span className="p-1">{carData.seats} Seats</span>|
            <span className="p-1">
              <i className="fas fa-solid fa-fan"></i>
              {carData.ac ? " AC" : " NON-AC"}
            </span>
            |<span className="p-2">{carData.luggage} Luggage Bags</span>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="text-gray-700 text-sm">
            <span className="font-medium">{carData.distanceIncluded} kms </span>
            included |
            <span className="font-medium ml-2">{carData.ratePerKm}/km </span>
            after {carData.distanceIncluded} kms
          </div>
        </div>
        {/* Pricing and CTA */}
        <div className="flex flex-col items-center sm:items-end mt-6 sm:mt-0">
          <div className="text-gray-900 font-bold text-2xl mb-1">
            ₹{carData.price}
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
  );
};

export default CardView;
