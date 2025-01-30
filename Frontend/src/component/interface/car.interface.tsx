export interface CarData {
  city: string;
  fuel_type: string;
  insurance_included: string;
  rating: string;
  is_ac_car: string;
  luggage_capacity: string;
  name: string;
  price_per_km: string;
  minimum_rental_hrs_duration: string;
  minimum_rental_kms_duration: string;
  is_available_to_rent: string;
  car_image: string;
  capacity: string;
  cancellation_policy: string;
  body: string;
  availability_status: string;
}

interface CarState {
  carsData: CarData[];
}

export interface CarStateData {
  car: CarState;
}
