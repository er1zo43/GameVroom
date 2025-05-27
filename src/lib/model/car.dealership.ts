export interface CarDealership {
  name: string;
  locations: {
    country: string;
    cities: string[];
  }[];
}
