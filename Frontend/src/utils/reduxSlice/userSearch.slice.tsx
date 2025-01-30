import { createSlice } from "@reduxjs/toolkit";

interface SearchData {
  pickUpLocation: string;
  pickUpDate: string;
  pickUpTime: string;
  Duration: number;
}

interface userSearchState {
  searchValue: SearchData;
}

const initialState: userSearchState = {
  searchValue: {
    pickUpLocation: "rajkot",
    pickUpDate: "2024-01-30",
    pickUpTime: "12:30",
    Duration: 10,
  },
};

const userSearchSlice = createSlice({
  name: "userSearch",
  initialState,
  reducers: {
    setUserSearchData: (state, action) => {
      state.searchValue = { ...state.searchValue, ...action.payload };
    },
  },
});
export const { setUserSearchData } = userSearchSlice.actions;

export default userSearchSlice.reducer;
