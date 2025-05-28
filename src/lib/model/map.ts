export interface Map {
  type: "BASE_GAME" | "DLC";
  countries: Country[];
  name?: string;
  imagePath?: string;
}

export interface Country {
  name: string;
  capital: Capital;
  cities: City[];
}

export interface City {
  name: string;
}

export interface Capital {
  name: string;
}