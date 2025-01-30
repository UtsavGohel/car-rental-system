import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserSearchData } from "../utils/reduxSlice/userSearch.slice";

const Navbar = () => {
  const [formData, setFormData] = useState({
    pickUpLocation: "rajkot",
    pickUpDate: "2025-01-30",
    pickUpTime: "11:30",
    Duration: "10",
  });

  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(`🚀 ~ file: Navbar.tsx:63 ~ handleChange ~ value:`, value);
    console.log(`🚀 ~ file: Navbar.tsx:63 ~ handleChange ~ name:`, name);
  };

  const handleSearch = () => {
    dispatch(setUserSearchData(formData)); // Send complete form data to Redux
    console.log("Search data dispatched:", formData);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white px-6 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-6 items-center">
            {/* Pickup Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300">
                Pickup City
              </label>
              <input
                type="text"
                name="pickUpLocation"
                value={formData.pickUpLocation}
                onChange={handleChange}
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
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
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
                name="pickUpTime"
                value={formData.pickUpTime}
                onChange={handleChange}
                className="mt-2 px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Duration */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300">
                Duration
              </label>
              <select
                name="Duration"
                value={formData.Duration}
                onChange={handleChange}
                className="mt-2 px-2 py-2 rounded-md bg-white text-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="10km">10 km</option>
                <option value="20km">20 km</option>
                <option value="30km">30 km</option>
                <option value="40km">40 km</option>
                <option value="50km">50 km</option>
              </select>
            </div>

            {/* Search Button (Only dispatches when clicked) */}
            <div className="relative">
              <button
                onClick={handleSearch}
                className="mt-7 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 border border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
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
