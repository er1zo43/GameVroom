import { CarDealership } from "../model/car.dealership";
import { DLC } from "../model/dlc";
import { Map } from "../model/map";
import { Truck } from "../model/truck";
import { Trailer } from "../model/trailer";

const trucks: Truck[] = [
  {
    manufacturer: "Scania",
    model: "R Series",
    imagePath: "/images/trucks/scania_r_series.jpg",
    releaseDate: new Date("2016-01-01"),
    engines: [
      { name: "DC13 114", power: "420 hp", torque: "2100 Nm", cost: 45000, unlockLevel: 8 },
      { name: "DC13 115", power: "450 hp", torque: "2350 Nm", cost: 52000, unlockLevel: 12 }
    ],
    transmissions: [
      { name: "GRS905", gears: 12, ratioValues: "15.86-1.00", finalDriveRatio: 2.71, cost: 8500, unlockLevel: 5 },
      { name: "GRSO905", gears: 12, ratioValues: "16.69-1.00", finalDriveRatio: 2.92, cost: 12000, unlockLevel: 10 }
    ],
    chassis: [
      { wheelFormula: "4x2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3700mm", cost: 15000, unlockLevel: 1 },
      { wheelFormula: "6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "3900mm", cost: 25000, unlockLevel: 8 }
    ],
    cabins: [
      { name: "Day Cab", cost: 8000, unlockLevel: 1 },
      { name: "Sleeper Cab", cost: 15000, unlockLevel: 5 }
    ]
  },
  {
    manufacturer: "DAF",
    model: "NGD",
    imagePath: "/public/images/trucks/daf/daf_ngd.png",
    releaseDate: new Date("10.06.2021"),
    engines: [
      { name: "МХ-11 270", power: "367 л. с. (270кВт)", torque: "1 800/1 950 Нм на 900-1 400 об/м", cost: 12000, unlockLevel: 2 },
      { name: "МХ-11 300", power: "408 л. с. (300кВт)", torque: "2 000/2 150 Нм на 900-1 400 об/м", cost: 12600, unlockLevel: 2 },
      { name: "МХ-13 315", power: "428 л. с. (315кВт)", torque: "2 150/2 300 Нм на 900-1 400 об/м", cost: 13320, unlockLevel: 6 },
      { name: "МХ-11 330", power: "449 л. с. (330кВт)", torque: "2 200/2 350 Нм на 900-1 400 об/м", cost: 15000, unlockLevel: 8 },
      { name: "МХ-13 355", power: "483 л. с. (355кВт)", torque: "2 350/2 500 Нм на 900-1 400 об/м", cost: 19800, unlockLevel: 14 },
      { name: "МХ-13 390", power: "530 л. с. (390кВт)", torque: "2 550/2 700 Нм на 900-1 400 об/м", cost: 22200, unlockLevel: 18 }
    ],
    transmissions: [
      { name: "ZF 12TX2420TD", gears: 12, ratioValues: "16.69-1.00", finalDriveRatio: 2.64, cost: 10500, unlockLevel: 0 },
      { name: "ZF 12TX2610TO", gears: 12, ratioValues: "12.92-0.77", finalDriveRatio: 3.08, cost: 11500, unlockLevel: 10 },
      { name: "ZF 16TX2640TO", gears: 16, ratioValues: "14.68-0.82", finalDriveRatio: 3.40, cost: 13500, unlockLevel: 16 },
      { name: "ZF 12TX2421TD R", gears: 12, ratioValues: "16.69-1.00", finalDriveRatio: 2.64, cost: 16500, unlockLevel: 0 },
      { name: "ZF 12TX2611TO R", gears: 12, ratioValues: "12.92-0.77", finalDriveRatio: 3.08, cost: 17500, unlockLevel: 10 },
      { name: "ZF 16TX2641TO R", gears: 16, ratioValues: "14.68-0.82", finalDriveRatio: 3.40, cost: 19500, unlockLevel: 16 }
    ],
    chassis: [
      { wheelFormula: "FT 4x2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3989", cost: 29400, unlockLevel: 4 },
      { wheelFormula: "FTG 6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "XXX", cost: 32880, unlockLevel: 8 },
      { wheelFormula: "FTS 6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "XXX", cost: 32880, unlockLevel: 8 },
      { wheelFormula: "FTN 6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "XXX", cost: 40920, unlockLevel: 10 },
      { wheelFormula: "FTT 6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "XXX", cost: 53880, unlockLevel: 14 },
      { wheelFormula: "FTM 8x4", totalNumberOfAxles: 4, numberOfDrivenAxles: 2, wheelbase: "XXX", cost: 82140, unlockLevel: 16 }
    ],
    cabins: [
      { name: "XF", cost: 19400, unlockLevel: 8 },
      { name: "XG", cost: 39960, unlockLevel: 8 },
      { name: "XG+", cost: 63240, unlockLevel: 12 }
    ]
  },
  {
    manufacturer: "Volvo",
    model: "FH16",
    imagePath: "/images/trucks/volvo_fh16.jpg",
    releaseDate: new Date("2016-01-01"),
    engines: [
      { name: "D13K420", power: "420 hp", torque: "2100 Nm", cost: 48000, unlockLevel: 10 },
      { name: "D13K460", power: "460 hp", torque: "2300 Nm", cost: 55000, unlockLevel: 15 }
    ],
    transmissions: [
      { name: "I-Shift AT2412D", gears: 12, ratioValues: "15.04-1.00", finalDriveRatio: 2.85, cost: 9000, unlockLevel: 6 },
      { name: "I-Shift AT2612D", gears: 12, ratioValues: "14.94-1.00", finalDriveRatio: 3.08, cost: 13000, unlockLevel: 12 }
    ],
    chassis: [
      { wheelFormula: "4x2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3800mm", cost: 16000, unlockLevel: 1 },
      { wheelFormula: "6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4200mm", cost: 22000, unlockLevel: 6 }
    ],
    cabins: [
      { name: "Day Cab", cost: 9000, unlockLevel: 1 },
      { name: "Sleeper Cab", cost: 16000, unlockLevel: 6 }
    ]
  },
  {
    manufacturer: "Mercedes-Benz",
    model: "Actros",
    imagePath: "/images/trucks/mercedes_actros.jpg",
    releaseDate: new Date("2016-01-01"),
    engines: [
      { name: "OM471", power: "408 hp", torque: "2000 Nm", cost: 46000, unlockLevel: 9 },
      { name: "OM471", power: "449 hp", torque: "2200 Nm", cost: 53000, unlockLevel: 14 }
    ],
    transmissions: [
      { name: "PowerShift 3", gears: 12, ratioValues: "16.68-1.00", finalDriveRatio: 2.73, cost: 8800, unlockLevel: 7 },
      { name: "PowerShift 3", gears: 16, ratioValues: "15.86-0.69", finalDriveRatio: 2.92, cost: 14000, unlockLevel: 13 }
    ],
    chassis: [
      { wheelFormula: "4x2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3600mm", cost: 15500, unlockLevel: 1 },
      { wheelFormula: "6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "3900mm", cost: 26000, unlockLevel: 9 }
    ],
    cabins: [
      { name: "ClassicSpace", cost: 8500, unlockLevel: 1 },
      { name: "BigSpace", cost: 17000, unlockLevel: 7 }
    ]
  },
  {
    manufacturer: "MAN",
    model: "TGX",
    imagePath: "/images/trucks/man_tgx.jpg",
    releaseDate: new Date("2017-01-01"),
    engines: [
      { name: "D2676 LF", power: "400 hp", torque: "1900 Nm", cost: 44000, unlockLevel: 7 },
      { name: "D2676 LF", power: "440 hp", torque: "2100 Nm", cost: 51000, unlockLevel: 11 }
    ],
    transmissions: [
      { name: "TipMatic", gears: 12, ratioValues: "16.69-1.00", finalDriveRatio: 2.85, cost: 9200, unlockLevel: 8 },
      { name: "TipMatic", gears: 12, ratioValues: "15.86-1.00", finalDriveRatio: 3.08, cost: 12800, unlockLevel: 14 }
    ],
    chassis: [
      { wheelFormula: "4x2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3700mm", cost: 15800, unlockLevel: 1 },
      { wheelFormula: "6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4100mm", cost: 23000, unlockLevel: 7 }
    ],
    cabins: [
      { name: "M", cost: 8800, unlockLevel: 1 },
      { name: "XLX", cost: 16500, unlockLevel: 8 }
    ]
  },
  {
    manufacturer: "DAF",
    model: "XF",
    imagePath: "/images/trucks/daf_xf.jpg",
    releaseDate: new Date("2017-01-01"),
    engines: [
      { name: "PACCAR MX-13", power: "410 hp", torque: "2000 Nm", cost: 47000, unlockLevel: 8 },
      { name: "PACCAR MX-13", power: "460 hp", torque: "2300 Nm", cost: 54000, unlockLevel: 13 }
    ],
    transmissions: [
      { name: "TraXon", gears: 12, ratioValues: "15.86-1.00", finalDriveRatio: 2.79, cost: 9500, unlockLevel: 9 },
      { name: "TraXon", gears: 16, ratioValues: "16.69-0.78", finalDriveRatio: 3.07, cost: 13500, unlockLevel: 15 }
    ],
    chassis: [
      { wheelFormula: "4x2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3700mm", cost: 16200, unlockLevel: 1 },
      { wheelFormula: "6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "3800mm", cost: 25500, unlockLevel: 8 }
    ],
    cabins: [
      { name: "Day Cab", cost: 9200, unlockLevel: 1 },
      { name: "Space Cab", cost: 17500, unlockLevel: 9 }
    ]
  }
]

const trailers: Trailer[] = [
  {
    manufacturer: "Schwarzmüller",
    model: "S1",
    imagePath: "/images/trailers/schwarzmuller_s1.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Curtain sider",
    bodyInternalDimensions: {
      length: 13620,
      height: 2700,
      width: 2480
    },
    curbWeight: 7100,
    numberOfAxles: 3,
    numberOfLiftAxles: 1,
    numberOfSteeredAxles: 0,
    overallLength: 13620,
    cargoTypesTransported: ["Food", "Textiles", "Electronics", "Machinery"]
  },
  {
    manufacturer: "Krone",
    model: "Profi Liner",
    imagePath: "/images/trailers/krone_profi_liner.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Curtain sider",
    bodyInternalDimensions: {
      length: 13620,
      height: 2700,
      width: 2480
    },
    curbWeight: 6800,
    numberOfAxles: 3,
    numberOfLiftAxles: 1,
    numberOfSteeredAxles: 0,
    overallLength: 13620,
    cargoTypesTransported: ["Food", "Beverages", "Paper", "Chemicals"]
  },
  {
    manufacturer: "Schmitz",
    model: "S.KO",
    imagePath: "/images/trailers/schmitz_sko.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Refrigerated",
    bodyInternalDimensions: {
      length: 13400,
      height: 2600,
      width: 2460
    },
    curbWeight: 8200,
    numberOfAxles: 3,
    numberOfLiftAxles: 1,
    numberOfSteeredAxles: 0,
    overallLength: 13620,
    cargoTypesTransported: ["Frozen food", "Fresh produce", "Pharmaceuticals"]
  },
  {
    manufacturer: "Kogel",
    model: "Port Tank",
    imagePath: "/images/trailers/kogel_port_tank.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Tank",
    bodyInternalDimensions: {
      length: 12000,
      height: 4000,
      width: 2500
    },
    curbWeight: 7500,
    numberOfAxles: 3,
    numberOfLiftAxles: 0,
    numberOfSteeredAxles: 0,
    overallLength: 13620,
    cargoTypesTransported: ["Fuel", "Chemicals", "Food liquids"]
  },
  {
    manufacturer: "Wielton",
    model: "NW 3",
    imagePath: "/images/trailers/wielton_nw3.jpg",
    trailerType: "Semi-trailer",
    bodyType: "Flatbed",
    bodyInternalDimensions: {
      length: 13620,
      height: 0,
      width: 2480
    },
    curbWeight: 6200,
    numberOfAxles: 3,
    numberOfLiftAxles: 1,
    numberOfSteeredAxles: 0,
    overallLength: 13620,
    cargoTypesTransported: ["Construction materials", "Machinery", "Steel", "Containers"]
  }
]

const maps: Map[] = [
  {
    type: "BASE_GAME",
    countries: [
      {
        name: "Germany",
        capital: { name: "Berlin" },
        cities: [
          { name: "Berlin" },
          { name: "Hamburg" },
          { name: "München" },
          { name: "Köln" },
          { name: "Dortmund" }
        ]
      },
      {
        name: "United Kingdom",
        capital: { name: "London" },
        cities: [
          { name: "London" },
          { name: "Manchester" },
          { name: "Birmingham" },
          { name: "Sheffield" },
          { name: "Cambridge" }
        ]
      }
    ],
    imagePath: "/images/maps/base_game.jpg"
  },
  {
    type: "DLC",
    countries: [
      {
        name: "France",
        capital: { name: "Paris" },
        cities: [
          { name: "Paris" },
          { name: "Lyon" },
          { name: "Marseille" },
          { name: "Bordeaux" },
          { name: "Le Havre" }
        ]
      }
    ],
    imagePath: "/images/maps/vive_la_france.jpg"
  },
  {
    type: "DLC",
    countries: [
      {
        name: "Italy",
        capital: { name: "Roma" },
        cities: [
          { name: "Roma" },
          { name: "Milano" },
          { name: "Napoli" },
          { name: "Palermo" },
          { name: "Bari" }
        ]
      }
    ],
    imagePath: "/images/maps/italia.jpg"
  },
  {
    type: "DLC",
    countries: [
      {
        name: "Scandinavia",
        capital: { name: "Stockholm" },
        cities: [
          { name: "Stockholm" },
          { name: "Oslo" },
          { name: "Helsinki" },
          { name: "Göteborg" },
          { name: "Bergen" }
        ]
      }
    ],
    imagePath: "/images/maps/scandinavia.jpg"
  },
  {
    type: "DLC",
    countries: [
      {
        name: "Eastern Europe",
        capital: { name: "Warsaw" },
        cities: [
          { name: "Warsaw" },
          { name: "Prague" },
          { name: "Budapest" },
          { name: "Bratislava" },
          { name: "Kraków" }
        ]
      }
    ],
    imagePath: "/images/maps/going_east.jpg"
  }
]

const dlcs: DLC[] = [
  {
    name: "Going East!",
    tag: "going_east",
    content: "Expand your trucking empire to Eastern Europe with Poland, Czech Republic, Slovakia, and Hungary",
    releaseDate: new Date("2013-09-20")
  },
  {
    name: "Scandinavia",
    tag: "scandinavia",
    content: "Experience the Nordic beauty with Denmark, Norway, and Sweden",
    releaseDate: new Date("2015-05-06")
  },
  {
    name: "Vive la France!",
    tag: "vive_la_france",
    content: "Discover the diverse landscapes and rich culture of France",
    releaseDate: new Date("2016-12-05")
  },
  {
    name: "Italia",
    tag: "italia",
    content: "Explore the boot-shaped peninsula with iconic Italian cities and scenery",
    releaseDate: new Date("2017-12-05")
  },
  {
    name: "Beyond the Baltic Sea",
    tag: "beyond_baltic_sea",
    content: "Visit the Baltic states of Lithuania, Latvia, Estonia, and parts of Russia and Finland",
    releaseDate: new Date("2018-11-29")
  }
]

const carDealerships: CarDealership[] = [
  {
    name: "Scania",
    locations: [
      {
        country: "Germany",
        cities: ["Berlin", "Hamburg", "München"]
      },
      {
        country: "Sweden",
        cities: ["Stockholm", "Göteborg"]
      },
      {
        country: "United Kingdom",
        cities: ["London", "Manchester"]
      }
    ]
  },
  {
    name: "Volvo",
    locations: [
      {
        country: "Sweden",
        cities: ["Stockholm", "Göteborg"]
      },
      {
        country: "Germany",
        cities: ["Berlin", "Köln"]
      },
      {
        country: "France",
        cities: ["Paris", "Lyon"]
      }
    ]
  },
  {
    name: "Mercedes-Benz",
    locations: [
      {
        country: "Germany",
        cities: ["Berlin", "Hamburg", "München", "Köln"]
      },
      {
        country: "United Kingdom",
        cities: ["London", "Birmingham"]
      },
      {
        country: "France",
        cities: ["Paris", "Marseille"]
      }
    ]
  },
  {
    name: "MAN",
    locations: [
      {
        country: "Germany",
        cities: ["Berlin", "München", "Dortmund"]
      },
      {
        country: "Austria",
        cities: ["Wien", "Salzburg"]
      },
      {
        country: "Czech Republic",
        cities: ["Prague"]
      }
    ]
  },
  {
    name: "DAF",
    locations: [
      {
        country: "Netherlands",
        cities: ["Amsterdam", "Rotterdam"]
      },
      {
        country: "United Kingdom",
        cities: ["London", "Sheffield"]
      },
      {
        country: "Germany",
        cities: ["Hamburg", "Köln"]
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