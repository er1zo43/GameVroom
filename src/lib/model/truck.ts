export interface Truck {
  manufacturer: string;
  model: string;
  imagePath: string;
  releaseDate: Date;
  engines: Engine[];
  transmissions: Transmission[];
  chassis: Chassis[];
  cabins: Cabin[];
}

export interface Engine {
  name: string;
  power: string;
  torque: string;
  cost: number;
  unlockLevel: number;
}

export interface Transmission {
  name: string;
  gears: number;
  ratioValues: string;
  finalDriveRatio: number;
  cost: number;
  unlockLevel: number;
}

export interface Chassis {
  wheelFormula: string;
  totalNumberOfAxles: number;
  numberOfDrivenAxles: number;
  wheelbase: string;
  cost: number;
  unlockLevel: number;
}

interface Cabin {
  name: string;
  cost: number;
  unlockLevel: number;
}