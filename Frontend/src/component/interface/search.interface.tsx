export interface SearchData {
  pickUpLocation: string;
  pickUpDate: string;
  pickUpTime: number;
  Duration: number;
}

interface SearchState {
  searchValue: SearchData;
}

export interface SearchStateData {
  userSearch: SearchState;
}
