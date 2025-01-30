import { createSlice } from "@reduxjs/toolkit";

// Define the shape of each car data object
interface CarData {
  image: string;
  name: string;
  rating: number;
  totalRatings: number;
  location: string;
  type: string;
  seats: number;
  ac: boolean;
  luggage: number;
  distanceIncluded: number;
  ratePerKm: string;
  price: number;
}

interface CarState {
  carsData: CarData[];
  kmsData: number;
}

const initialState: CarState = {
  carsData: [],
  kmsData: 10,
};

const carsSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    // Only update the carsData part of the state
    setDashboardCarData: (state, action) => {
      state.carsData = action.payload.dashboardData;
    },
    setKmsData: (state, action) => {
      state.kmsData = action.payload.dashboardKmData;
    },
  },
});
export const { setDashboardCarData, setKmsData } = carsSlice.actions;

export default carsSlice.reducer;
