export interface Trailer {
  manufacturer: string;
  model: string;
  imagePath: string;
  trailerType: string;
  bodyType: string;
  bodyInternalDimensions: {
    length: number;
    height: number;
    width: number;
  };
  curbWeight: number;
  numberOfAxles: number;
  numberOfLiftAxles: number;
  numberOfSteeredAxles: number;
  overallLength: number;
  cargoTypesTransported: string[];
}
