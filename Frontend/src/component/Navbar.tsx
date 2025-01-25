import { SetStateAction, useState } from "react";

const Navbar = () => {
  const [pickupLocation, setPickupLocation] = useState("Rajkot Airport");
  const [pickupDate, setPickupDate] = useState("2025-01-25");
  const [pickupTime, setPickupTime] = useState("12:30");
  const [duration, setDuration] = useState("2hrs 20km");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLocationChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPickupLocation(e.target.value);
  };

  const handleDateChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    console.log(e.target.value);

    setPickupDate(e.target.value);
  };

  const handleTimeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPickupTime(e.target.value);
  };
  const handleDurationChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDuration(e.target.value);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white px-6 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Navigation Options */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Pickup Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300">
                Pickup Location
              </label>
              <input
                type="text"
                value={pickupLocation}
                onChange={handleLocationChange}
                placeholder="Enter Location"
                className="mt-2 px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Pickup Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300">
                Pickup Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={handleDateChange}
                className="mt-2 px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Pickup Time */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300">
                Pickup Time
              </label>
              <input
                type="time"
                value={pickupTime}
                onChange={handleTimeChange}
                className="mt-2 px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Duration */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300">
                Duration
              </label>
              <select
                value={duration}
                onChange={handleDurationChange}
                className="mt-2 px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="1hrs 10km">1 hrs 10 km</option>
                <option value="2hrs 20km">2 hrs 20 km</option>
                <option value="3hrs 30km">3 hrs 30 km</option>
                <option value="4hrs 40km">4 hrs 40 km</option>
                <option value="5hrs 50km">5 hrs 50 km</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="relative">
              <button className="mt-7 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 border border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none">
                Search
              </button>
            </div>
          </div>

          {/* Login/Logout Button */}
          <div className="relative">
            <button
              onClick={handleLoginLogout}
              className="mt-7 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 border border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none flex items-center space-x-2"
            >
              <i
                className={`fas fa-user ${
                  isLoggedIn ? "text-green-500" : "text-gray-300"
                }`}
              ></i>
              <span>{isLoggedIn ? "Logout" : "Login"}</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
