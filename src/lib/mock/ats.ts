import { CarDealership } from "../model/car.dealership";
import { DLC } from "../model/dlc";
import { Map } from "../model/map";
import { Truck } from "../model/truck";
import { Trailer } from "../model/trailer";

const trucks: Truck[] = [
  {
    manufacturer: "Peterbilt",
    model: "579",
    imagePath: "/images/trucks/peterbilt_579.jpg",
    releaseDate: new Date("2016-01-01"),
    engines: [
      { name: "PACCAR MX-13", power: "455 hp", torque: "2237 Nm", cost: 52000, unlockLevel: 10 },
      { name: "PACCAR MX-13", power: "500 hp", torque: "2508 Nm", cost: 58000, unlockLevel: 15 }
    ],
    transmissions: [
      { name: "Eaton Fuller 18-Speed", gears: 18, ratioValues: "15.31-1.00", finalDriveRatio: 3.55, cost: 12000, unlockLevel: 8 },
      { name: "Allison 4500 RDS", gears: 6, ratioValues: "4.70-0.75", finalDriveRatio: 3.73, cost: 15000, unlockLevel: 12 }
    ],
    chassis: [
      { wheelFormula: "6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "230in", cost: 28000, unlockLevel: 1 },
      { wheelFormula: "6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "244in", cost: 24000, unlockLevel: 6 }
    ],
    cabins: [
      { name: "Day Cab", cost: 12000, unlockLevel: 1 },
      { name: "Sleeper", cost: 22000, unlockLevel: 8 }
    ]
  },
  {
    manufacturer: "Kenworth",
    model: "W900",
    imagePath: "/images/trucks/kenworth_w900.jpg",
    releaseDate: new Date("2016-01-01"),
    engines: [
      { name: "Caterpillar C15", power: "435 hp", torque: "2034 Nm", cost: 48000, unlockLevel: 9 },
      { name: "Caterpillar C15", power: "475 hp", torque: "2373 Nm", cost: 55000, unlockLevel: 14 }
    ],
    transmissions: [
      { name: "Eaton Fuller 13-Speed", gears: 13, ratioValues: "11.73-1.00", finalDriveRatio: 3.36, cost: 10000, unlockLevel: 6 },
      { name: "Eaton Fuller 18-Speed", gears: 18, ratioValues: "15.31-1.00", finalDriveRatio: 3.73, cost: 13500, unlockLevel: 11 }
    ],
    chassis: [
      { wheelFormula: "6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "244in", cost: 30000, unlockLevel: 1 },
      { wheelFormula: "6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "265in", cost: 26000, unlockLevel: 7 }
    ],
    cabins: [
      { name: "Day Cab", cost: 15000, unlockLevel: 1 },
      { name: "Studio Sleeper", cost: 28000, unlockLevel: 10 }
    ]
  },
  {
    manufacturer: "Freightliner",
    model: "Cascadia",
    imagePath: "/images/trucks/freightliner_cascadia.jpg",
    releaseDate: new Date("2017-01-01"),
    engines: [
      { name: "Detroit DD15", power: "455 hp", torque: "2237 Nm", cost: 50000, unlockLevel: 11 },
      { name: "Detroit DD15", power: "505 hp", torque: "2508 Nm", cost: 57000, unlockLevel: 16 }
    ],
    transmissions: [
      { name: "Detroit DT12", gears: 12, ratioValues: "14.93-1.00", finalDriveRatio: 3.42, cost: 11500, unlockLevel: 9 },
      { name: "Eaton Fuller 18-Speed", gears: 18, ratioValues: "15.31-1.00", finalDriveRatio: 3.90, cost: 14000, unlockLevel: 13 }
    ],
    chassis: [
      { wheelFormula: "6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "230in", cost: 27000, unlockLevel: 1 },
      { wheelFormula: "6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "244in", cost: 23000, unlockLevel: 5 }
    ],
    cabins: [
      { name: "Day Cab", cost: 10000, unlockLevel: 1 },
      { name: "Sleeper", cost: 20000, unlockLevel: 7 }
    ]
  },
  {
    manufacturer: "Volvo",
    model: "VNL",
    imagePath: "/images/trucks/volvo_vnl.jpg",
    releaseDate: new Date("2017-01-01"),
    engines: [
      { name: "Volvo D13", power: "425 hp", torque: "2034 Nm", cost: 49000, unlockLevel: 10 },
      { name: "Volvo D13", power: "500 hp", torque: "2508 Nm", cost: 56000, unlockLevel: 15 }
    ],
    transmissions: [
      { name: "Volvo I-Shift", gears: 12, ratioValues: "14.93-1.00", finalDriveRatio: 3.55, cost: 12500, unlockLevel: 10 },
      { name: "Eaton Fuller 18-Speed", gears: 18, ratioValues: "15.31-1.00", finalDriveRatio: 3.73, cost: 14500, unlockLevel: 14 }
    ],
    chassis: [
      { wheelFormula: "6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "230in", cost: 29000, unlockLevel: 1 },
      { wheelFormula: "6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "244in", cost: 25000, unlockLevel: 8 }
    ],
    cabins: [
      { name: "Day Cab", cost: 11000, unlockLevel: 1 },
      { name: "Sleeper", cost: 21000, unlockLevel: 9 }
    ]
  },
  {
    manufacturer: "Mack",
    model: "Anthem",
    imagePath: "/images/trucks/mack_anthem.jpg",
    releaseDate: new Date("2018-01-01"),
    engines: [
      { name: "Mack MP8", power: "445 hp", torque: "2169 Nm", cost: 51000, unlockLevel: 12 },
      { name: "Mack MP8", power: "505 hp", torque: "2508 Nm", cost: 58000, unlockLevel: 17 }
    ],
    transmissions: [
      { name: "Mack mDRIVE", gears: 12, ratioValues: "14.93-1.00", finalDriveRatio: 3.42, cost: 13000, unlockLevel: 11 },
      { name: "Eaton Fuller 18-Speed", gears: 18, ratioValues: "15.31-1.00", finalDriveRatio: 3.90, cost: 15000, unlockLevel: 15 }
    ],
    chassis: [
      { wheelFormula: "6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "230in", cost: 31000, unlockLevel: 1 },
      { wheelFormula: "6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "244in", cost: 27000, unlockLevel: 9 }
    ],
    cabins: [
      { name: "Day Cab", cost: 13000, unlockLevel: 1 },
      { name: "Sleeper", cost: 25000, unlockLevel: 11 }
    ]
  }
]

const trailers: Trailer[] = [
  {
    manufacturer: "Great Dane",
    model: "Everest",
    imagePath: "/images/trailers/great_dane_everest.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Dry van",
    bodyInternalDimensions: {
      length: 16154,
      height: 2743,
      width: 2591
    },
    curbWeight: 6804,
    numberOfAxles: 2,
    numberOfLiftAxles: 0,
    numberOfSteeredAxles: 0,
    overallLength: 16154,
    cargoTypesTransported: ["Electronics", "Textiles", "Food", "Household goods"]
  },
  {
    manufacturer: "Utility",
    model: "3000R",
    imagePath: "/images/trailers/utility_3000r.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Refrigerated",
    bodyInternalDimensions: {
      length: 16154,
      height: 2692,
      width: 2540
    },
    curbWeight: 7711,
    numberOfAxles: 2,
    numberOfLiftAxles: 0,
    numberOfSteeredAxles: 0,
    overallLength: 16154,
    cargoTypesTransported: ["Frozen food", "Fresh produce", "Dairy products", "Pharmaceuticals"]
  },
  {
    manufacturer: "Fontaine",
    model: "Magnitude",
    imagePath: "/images/trailers/fontaine_magnitude.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Flatbed",
    bodyInternalDimensions: {
      length: 14630,
      height: 0,
      width: 2591
    },
    curbWeight: 6350,
    numberOfAxles: 3,
    numberOfLiftAxles: 1,
    numberOfSteeredAxles: 0,
    overallLength: 16154,
    cargoTypesTransported: ["Construction materials", "Machinery", "Steel coils", "Lumber"]
  },
  {
    manufacturer: "Brenner",
    model: "Tank",
    imagePath: "/images/trailers/brenner_tank.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Tank",
    bodyInternalDimensions: {
      length: 12802,
      height: 4267,
      width: 2591
    },
    curbWeight: 8618,
    numberOfAxles: 3,
    numberOfLiftAxles: 0,
    numberOfSteeredAxles: 0,
    overallLength: 16154,
    cargoTypesTransported: ["Fuel", "Chemicals", "Food liquids", "Industrial liquids"]
  },
  {
    manufacturer: "Wilson",
    model: "Pacesetter",
    imagePath: "/images/trailers/wilson_pacesetter.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Grain hopper",
    bodyInternalDimensions: {
      length: 14630,
      height: 4267,
      width: 2591
    },
    curbWeight: 7711,
    numberOfAxles: 2,
    numberOfLiftAxles: 0,
    numberOfSteeredAxles: 0,
    overallLength: 16154,
    cargoTypesTransported: ["Grain", "Seeds", "Agricultural products", "Bulk materials"]
  }
]

const maps: Map[] = [
  {
    type: "BASE_GAME",
    countries: [
      {
        name: "California",
        capital: { name: "Sacramento" },
        cities: [
          { name: "Los Angeles" },
          { name: "San Francisco" },
          { name: "San Diego" },
          { name: "Oakland" },
          { name: "Bakersfield" }
        ]
      },
      {
        name: "Nevada",
        capital: { name: "Carson City" },
        cities: [
          { name: "Las Vegas" },
          { name: "Reno" },
          { name: "Elko" },
          { name: "Winnemucca" },
          { name: "Ely" }
        ]
      }
    ],
    imagePath: "/images/maps/ats_base_game.jpg"
  },
  {
    type: "DLC",
    countries: [
      {
        name: "Arizona",
        capital: { name: "Phoenix" },
        cities: [
          { name: "Phoenix" },
          { name: "Tucson" },
          { name: "Flagstaff" },
          { name: "Yuma" },
          { name: "Kingman" }
        ]
      }
    ],
    imagePath: "/images/maps/arizona.jpg"
  },
  {
    type: "DLC",
    countries: [
      {
        name: "New Mexico",
        capital: { name: "Santa Fe" },
        cities: [
          { name: "Albuquerque" },
          { name: "Santa Fe" },
          { name: "Las Cruces" },
          { name: "Roswell" },
          { name: "Gallup" }
        ]
      }
    ],
    imagePath: "/images/maps/new_mexico.jpg"
  },
  {
    type: "DLC",
    countries: [
      {
        name: "Oregon",
        capital: { name: "Salem" },
        cities: [
          { name: "Portland" },
          { name: "Eugene" },
          { name: "Medford" },
          { name: "Bend" },
          { name: "Pendleton" }
        ]
      }
    ],
    imagePath: "/images/maps/oregon.jpg"
  },
  {
    type: "DLC",
    countries: [
      {
        name: "Washington",
        capital: { name: "Olympia" },
        cities: [
          { name: "Seattle" },
          { name: "Spokane" },
          { name: "Bellingham" },
          { name: "Everett" },
          { name: "Wenatchee" }
        ]
      }
    ],
    imagePath: "/images/maps/washington.jpg"
  }
]

const dlcs: DLC[] = [
  {
    name: "Arizona",
    tag: "arizona",
    content: "Experience the Grand Canyon State with desert landscapes and iconic southwestern scenery",
    releaseDate: new Date("2016-06-28")
  },
  {
    name: "New Mexico",
    tag: "new_mexico",
    content: "Explore the Land of Enchantment with diverse terrain from deserts to mountains",
    releaseDate: new Date("2017-11-09")
  },
  {
    name: "Oregon",
    tag: "oregon",
    content: "Discover the Pacific Northwest with dense forests, mountains, and coastal beauty",
    releaseDate: new Date("2018-10-04")
  },
  {
    name: "Washington",
    tag: "washington",
    content: "Travel through the Evergreen State with its diverse landscapes and major cities",
    releaseDate: new Date("2019-06-11")
  },
  {
    name: "Utah",
    tag: "utah",
    content: "Experience the Beehive State with its stunning national parks and unique rock formations",
    releaseDate: new Date("2019-11-07")
  }
]

const carDealerships: CarDealership[] = [
  {
    name: "Peterbilt",
    locations: [
      {
        country: "California",
        cities: ["Los Angeles", "San Francisco", "Oakland"]
      },
      {
        country: "Nevada",
        cities: ["Las Vegas", "Reno"]
      },
      {
        country: "Arizona",
        cities: ["Phoenix", "Tucson"]
      }
    ]
  },
  {
    name: "Kenworth",
    locations: [
      {
        country: "California",
        cities: ["Los Angeles", "San Diego", "Bakersfield"]
      },
      {
        country: "Washington",
        cities: ["Seattle", "Spokane"]
      },
      {
        country: "Oregon",
        cities: ["Portland", "Eugene"]
      }
    ]
  },
  {
    name: "Freightliner",
    locations: [
      {
        country: "California",
        cities: ["Los Angeles", "San Francisco", "San Diego"]
      },
      {
        country: "Nevada",
        cities: ["Las Vegas", "Reno"]
      },
      {
        country: "New Mexico",
        cities: ["Albuquerque", "Las Cruces"]
      }
    ]
  },
  {
    name: "Volvo",
    locations: [
      {
        country: "California",
        cities: ["San Francisco", "Oakland"]
      },
      {
        country: "Washington",
        cities: ["Seattle", "Everett"]
      },
      {
        country: "Oregon",
        cities: ["Portland", "Medford"]
      }
    ]
  },
  {
    name: "Mack",
    locations: [
      {
        country: "California",
        cities: ["Los Angeles", "Bakersfield"]
      },
      {
        country: "Arizona",
        cities: ["Phoenix", "Flagstaff"]
      },
      {
        country: "New Mexico",
        cities: ["Albuquerque", "Santa Fe"]
      }
    ]
  }
]

export default {
  trucks,
  trailers,
  maps,
  dlcs,
  carDealerships,
};