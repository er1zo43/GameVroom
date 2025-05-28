import { CarDealership } from "../model/car.dealership";
import { DLC } from "../model/dlc";
import { Map } from "../model/map";
import { Truck } from "../model/truck";
import { Trailer } from "../model/trailer";

const trucks: Truck[] = [
  {
    manufacturer: "Scania",
    model: "S",
    imagePath: "/images/trucks/scania_s.png",
    releaseDate: new Date("01.12.2017"),
    engines: [
      { name: "DC13 149 370 Euro 6", power: "370 л. с. (272кВт)", torque: "1900 Нм на 1000-1 300 об/м", cost: 14520, unlockLevel: 0 },
      { name: "DC13 141 410 Euro 6", power: "410 л. с. (302кВт)", torque: "2150 Нм на 1000-1 300 об/м", cost: 16680, unlockLevel: 6 },
      { name: "DC13 148 450 Euro 6", power: "450 л. с. (331кВт)", torque: "2350 Нм на 1000-1 300 об/м", cost: 18600, unlockLevel: 10 },
      { name: "DC13 155 500 Euro 6", power: "500 л. с. (368кВт)", torque: "2550 Нм на 1000-1 300 об/м", cost: 20760, unlockLevel: 12 },
      { name: "DC16 116 520 Euro 6 V8", power: "520 л. с. (382кВт)", torque: "2700 Нм на 1000-1 300 об/м", cost: 23760, unlockLevel: 15 },
      { name: "DC16 117 580 Euro 6 V8", power: "580 л. с. (427кВт)", torque: "3000 Нм на 950-1 350 об/м", cost: 25320, unlockLevel: 18 },
      { name: "DC16 118 650 Euro 6 V8", power: "650 л. с. (478кВт)", torque: "3300 Нм на 950-1 350 об/м", cost: 27300, unlockLevel: 20 },
      { name: "DC16 107 730 Euro 6 V8", power: "730 л. с. (537кВт)", torque: "3500 Нм на 1000-1 400 об/м", cost: 29100, unlockLevel: 25 }
    ],
    transmissions: [
      { name: "Opticruise GRS 905", gears: 12, ratioValues: "11.32-1.00", finalDriveRatio: 2.71, cost: 10000, unlockLevel: 0 },
      { name: "Opticruise GRSO 905", gears: 12, ratioValues: "9.16-0.80", finalDriveRatio: 3.08, cost: 11000, unlockLevel: 10 },
      { name: "Scania GA867", gears: 6, ratioValues: "4.70-0.67", finalDriveRatio: 3.91, cost: 12000, unlockLevel: 15 },
      { name: "Opticruise GRSO 925", gears: 14, ratioValues: "13.26-0.80", finalDriveRatio: 3.96, cost: 13000, unlockLevel: 16 },
      { name: "Opticruise GRS 905R", gears: 12, ratioValues: "11.32-1.00", finalDriveRatio: 2.71, cost: 16000, unlockLevel: 0 },
      { name: "Opticruise GRSO 905R", gears: 12, ratioValues: "9.16-0.80", finalDriveRatio: 3.08, cost: 17000, unlockLevel: 10 },
      { name: "Scania GA867 R", gears: 6, ratioValues: "4.70-0.67", finalDriveRatio: 3.91, cost: 18000, unlockLevel: 15 },
      { name: "Opticruise GRSO 925R", gears: 14, ratioValues: "13.26-0.80", finalDriveRatio: 3.9, cost: 19000, unlockLevel: 16 }
    ],
    chassis: [
      { wheelFormula: "4х2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3734", cost: 23520, unlockLevel: 0 },
      { wheelFormula: "6х2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4076", cost: 33960, unlockLevel: 8 },
      { wheelFormula: "6х2 Long", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4452", cost: 38160, unlockLevel: 8 },
      { wheelFormula: "6х2/4", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4076", cost: 41160, unlockLevel: 10 },
      { wheelFormula: "6х2 Long Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3157", cost: 43920, unlockLevel: 10 },
      { wheelFormula: "6х2/4 Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4076", cost: 51120, unlockLevel: 12 },
      { wheelFormula: "6х4 Long", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "4452", cost: 5720, unlockLevel: 14 },
      { wheelFormula: "8х4/4 Подъемная ось", totalNumberOfAxles: 4, numberOfDrivenAxles: 2, wheelbase: "4979", cost: 80880, unlockLevel: 16 }
    ],
    cabins: [
      { name: "Normal Roof", cost: 16440, unlockLevel: 0 },
      { name: "High Roof", cost: 38400, unlockLevel: 8 }
    ]
  },
  {
    manufacturer: "DAF",
    model: "NGD",
    imagePath: "/images/trucks/daf_ngd.png",
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
      { wheelFormula: "FTG 6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3931", cost: 32880, unlockLevel: 8 },
      { wheelFormula: "FTS 6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3382", cost: 32880, unlockLevel: 8 },
      { wheelFormula: "FTN 6x2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3382", cost: 40920, unlockLevel: 10 },
      { wheelFormula: "FTT 6x4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "4581", cost: 53880, unlockLevel: 14 },
      { wheelFormula: "FTM 8x4", totalNumberOfAxles: 4, numberOfDrivenAxles: 2, wheelbase: "5331", cost: 82140, unlockLevel: 16 }
    ],
    cabins: [
      { name: "XF", cost: 19400, unlockLevel: 8 },
      { name: "XG", cost: 39960, unlockLevel: 8 },
      { name: "XG+", cost: 63240, unlockLevel: 12 }
    ]
  },
  {
    manufacturer: "DAF",
    model: "XF Euro 6",
    imagePath: "/images/trucks/daf_xf.png",
    releaseDate: new Date("11.11.2014"),
    engines: [
      { name: "МХ-11 270 Euro 6, 2017", power: "370 л. с. (270кВт)", torque: "1 800/1 900 Нм на 900-1 400 об/м", cost: 12000, unlockLevel: 0 },
      { name: "МХ-13 303 Euro 6", power: "410 л. с. (303кВт)", torque: "2 000 Нм на 1 000-1 425 об/м", cost: 12600, unlockLevel: 2 },
      { name: "МХ-11 320 Euro 6", power: "435 л. с. (320кВт)", torque: "2 100 Нм на 1 000-1 450 об/м", cost: 13320, unlockLevel: 6 },
      { name: "МХ-11 330 Euro 6, 2017", power: "450 л. с. (330кВт)", torque: "2 200/2 300 Нм на 900-1 400 об/м", cost: 15000, unlockLevel: 8 },
      { name: "МХ-13 340 Euro 6", power: "460 л. с. (340кВт)", torque: "2 300 Нм на 1 000-1 425 об/м", cost: 17280, unlockLevel: 10 },
      { name: "МХ-13 355 Euro 6, 2017", power: "480 л. с. (355кВт)", torque: "2 350/2 500 Нм на 900-1 365 об/м", cost: 19800, unlockLevel: 14 },
      { name: "МХ-13 375 Euro 6", power: "510 л. с. (375кВт)", torque: "2 500 Нм на 1 000-1 425 об/м", cost: 20640, unlockLevel: 16 },
      { name: "МХ-13 390 Euro 6, 2017", power: "530 л. с. (390кВт)", torque: "2 500/2 600 Нм на 1 000-1 425 об/м", cost: 22200, unlockLevel: 18 }
    ],
    transmissions: [
      { name: "ZF 12TX2420TD", gears: 12, ratioValues: "16.69-1.00", finalDriveRatio: 2.6, cost: 10000, unlockLevel: 0 },
      { name: "ZF 12AS2530TO", gears: 12, ratioValues: "12.33-0.78", finalDriveRatio: 3.08, cost: 10500, unlockLevel: 0 },
      { name: "ZF 12TX2610TO", gears: 12, ratioValues: "12.92-0.77", finalDriveRatio: 3.08, cost: 11000, unlockLevel: 10 },
      { name: "Allison 4500", gears: 6, ratioValues: "4.70-0.67", finalDriveRatio: 3.91, cost: 11500, unlockLevel: 15 },
      { name: "ZF 16AS2630TO", gears: 16, ratioValues: "14.12-0.83", finalDriveRatio: 3.4, cost: 12000, unlockLevel: 16 },
      { name: "ZF 16TX2640TO", gears: 16, ratioValues: "14.68-0.82", finalDriveRatio: 3.4, cost: 13500, unlockLevel: 16 },
      { name: "ZF 12TX2421TD R", gears: 12, ratioValues: "16.69-1.00", finalDriveRatio: 2.64, cost: 16500, unlockLevel: 0 },
      { name: "ZF 12AS2531TD R", gears: 12, ratioValues: "12.33-0.78", finalDriveRatio: 3.08, cost: 17000, unlockLevel: 0 },
      { name: "ZF 12TX2611TD R", gears: 12, ratioValues: "12.92-0.77", finalDriveRatio: 3.08, cost: 17500, unlockLevel: 10 },
      { name: "Allison 4500 R", gears: 6, ratioValues: "4.70-0.67", finalDriveRatio: 3.91, cost: 18000, unlockLevel: 15 },
      { name: "ZF 16AS2631TD R", gears: 16, ratioValues: "14.12-0.83", finalDriveRatio: 3.4, cost: 15000, unlockLevel: 16 },
      { name: "ZF 16TX2641TD R", gears: 16, ratioValues: "14.68-0.82", finalDriveRatio: 3.4, cost: 15500, unlockLevel: 16 }
    ],
    chassis: [
      { wheelFormula: "4х2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3780", cost: 26160, unlockLevel: 0 },
      { wheelFormula: "6х2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4150", cost: 36120, unlockLevel: 8 },
      { wheelFormula: "6х2/4", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4150", cost: 42600, unlockLevel: 10 },
      { wheelFormula: "6х2 Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "2786", cost: 43560, unlockLevel: 10 },
      { wheelFormula: "6х2/4 Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4150", cost: 52560, unlockLevel: 12 },
      { wheelFormula: "6х4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "4150", cost: 55320, unlockLevel: 14 }
    ],
    cabins: [
      { name: "Space", cost: 19440, unlockLevel: 0 },
      { name: "Space Aero", cost: 39960, unlockLevel: 8 },
      { name: "Super Space", cost: 63240, unlockLevel: 12 }
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
    manufacturer: "MAN",
    model: "TG3 TGX",
    imagePath: "/images/trucks/man_tgx_2020.png",
    releaseDate: new Date("16.05.2023"),
    engines: [
      { name: "D1556 LF09 243 Euro 6d", power: "330 л. с. (243кВт)", torque: "1 600 Нм на 1 000 об/м", cost: 8160, unlockLevel: 0 },
      { name: "D1556 LF08 265 Euro 6d", power: "360 л. с. (265кВт)", torque: "1 700 Нм на 1 000 об/м", cost: 8400, unlockLevel: 0 },
      { name: "D1556 LF07 294 Euro 6d", power: "400 л. с. (294кВт)", torque: "1 800 Нм на 1 000 об/м", cost: 9000, unlockLevel: 4 },
      { name: "D2676 LF80 316 Euro 6d", power: "430 л. с. (316кВт)", torque: "2 200 Нм на 930 об/м", cost: 11760, unlockLevel: 8 },
      { name: "D2676 LF79 346 Euro 6d", power: "470 л. с. (346кВт)", torque: "2 400 Нм на 930 об/м", cost: 13440, unlockLevel: 12 },
      { name: "D2676 LF78 375 Euro 6d", power: "510 л. с. (375кВт)", torque: "2 600 Нм на 930 об/м", cost: 16560, unlockLevel: 16 },
      { name: "D3876 LF12 397 Euro 6d", power: "540 л. с. (403кВт)", torque: "2 700 Нм на 900 об/м", cost: 17760, unlockLevel: 18 },
      { name: "D3876 LF11 427 Euro 6d", power: "580 л. с. (427кВт)", torque: "2 900 Нм на 900 об/м", cost: 18720, unlockLevel: 20 },
      { name: "D3876 LF10 471 Euro 6d", power: "640 л. с. (471кВт)", torque: "3 000 Нм на 930 об/м", cost: 22080, unlockLevel: 20 }
    ],
    transmissions: [
      { name: "TipMatic 12 22 DD", gears: 12, ratioValues: "16.69-1.00", finalDriveRatio: 2.53, cost: 10000, unlockLevel: 0 },
      { name: "TipMatic 12 30 OD", gears: 12, ratioValues: "12.92-0.77", finalDriveRatio: 3.08, cost: 11000, unlockLevel: 10 },
      { name: "Allison 4500", gears: 6, ratioValues: "4.70-0.67", finalDriveRatio: 3.70, cost: 12000, unlockLevel: 15 },
      { name: "TipMatic 14 30 OD", gears: 14, ratioValues: "13.28-0.80", finalDriveRatio: 3.40, cost: 13000, unlockLevel: 16 },
      { name: "TipMatic 12 22 DD R", gears: 12, ratioValues: "16.69-1.00", finalDriveRatio: 2.53, cost: 16000, unlockLevel: 0 },
      { name: "TipMatic 12 30 OD R", gears: 12, ratioValues: "12.92-0.77", finalDriveRatio: 3.08, cost: 17000, unlockLevel: 10 },
      { name: "Allison 4500 R", gears: 6, ratioValues: "4.70-0.67", finalDriveRatio: 3.70, cost: 18000, unlockLevel: 15 },
      { name: "TipMatic 14 30 OD R", gears: 14, ratioValues: "13.28-0.80", finalDriveRatio: 3.40, cost: 19000, unlockLevel: 16 }
    ],
    chassis: [
      { wheelFormula: "4х2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3612", cost: 25560, unlockLevel: 0 },
      { wheelFormula: "6х2-2 Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3565", cost: 48720, unlockLevel: 10 },
      { wheelFormula: "6х2/2 Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3953", cost: 48720, unlockLevel: 10 },
      { wheelFormula: "6х2/4 Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3953", cost: 52320, unlockLevel: 12 },
      { wheelFormula: "6х4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "4704", cost: 55680, unlockLevel: 14 },
      { wheelFormula: "8х4/4 Подъемная ось", totalNumberOfAxles: 4, numberOfDrivenAxles: 2, wheelbase: "5447", cost: 82140, unlockLevel: 16 }
    ],
    cabins: [
      { name: "GN", cost: 15600, unlockLevel: 0 },
      { name: "GM", cost: 39120, unlockLevel: 8 },
      { name: "GX", cost: 62400, unlockLevel: 12 }
    ]
  },
  {
    manufacturer: "Renault",
    model: "T",
    imagePath: "/images/trucks/renault_t.png",
    releaseDate: new Date("26.09.2019"),
    engines: [
      { name: "DTI 11 380 Euro 6", power: "380 л. с. (279кВт)", torque: "1 800 Нм на 950-1 450 об/м", cost: 10200, unlockLevel: 0 },
      { name: "DTI 11 430 Euro 6", power: "430 л. с. (316кВт)", torque: "2 050 Нм на 1 000-1 400 об/м", cost: 14880, unlockLevel: 10 },
      { name: "DTI 13 440 Euro 6", power: "440 л. с. (324кВт)", torque: "2 200 Нм на 900-1 404 об/м", cost: 16560, unlockLevel: 12 },
      { name: "DTI 11 460 Euro 6", power: "460 л. с. (338кВт)", torque: "2 200 Нм на 1 000-1 400 об/м", cost: 17340, unlockLevel: 14 },
      { name: "DTI 13 480 Euro 6", power: "480 л. с. (353кВт)", torque: "2 400 Нм на 950-1 404 об/м", cost: 18240, unlockLevel: 16 },
      { name: "DTI 13 520 Euro 6", power: "520 л. с. (382кВт)", torque: "2 550 Нм на 1 100-1 430 об/м", cost: 19800, unlockLevel: 18 }
    ],
    transmissions: [
      { name: "Optidriver AT2612F", gears: 12, ratioValues: "14.94-1.00", finalDriveRatio: 2.6, cost: 10000, unlockLevel: 0 },
      { name: "Орфометр AT02612F", gears: 12, ratioValues: "11.73-0.79", finalDriveRatio: 3.0, cost: 11000, unlockLevel: 10 },
      { name: "Allison 4500", gears: 6, ratioValues: "4.70-0.67", finalDriveRatio: 3.9, cost: 12000, unlockLevel: 15 },
      { name: "Optidriver Xtended AT02614F", gears: 14, ratioValues: "32.04-0.79", finalDriveRatio: 3.4, cost: 13000, unlockLevel: 16 },
      { name: "Optidriver AT2612F R", gears: 12, ratioValues: "14.94-1.00", finalDriveRatio: 2.6, cost: 16000, unlockLevel: 0 },
      { name: "Optidriver AT02612F R", gears: 12, ratioValues: "11.73-0.79", finalDriveRatio: 3.0, cost: 17000, unlockLevel: 10 },
      { name: "Allison 4500 R", gears: 6, ratioValues: "4.70-0.67", finalDriveRatio: 3.91, cost: 18000, unlockLevel: 15 },
      { name: "Optidriver Xtended AT02614F R", gears: 14, ratioValues: "32.04-0.79", finalDriveRatio: 3.4, cost: 19000, unlockLevel: 16 }
    ],
    chassis: [
      { wheelFormula: "4х2", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3809", cost: 24960, unlockLevel: 0 },
      { wheelFormula: "4х2 Extra Tank", totalNumberOfAxles: 2, numberOfDrivenAxles: 1, wheelbase: "3809", cost: 29400, unlockLevel: 4 },
      { wheelFormula: "6х2", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "4753", cost: 32400, unlockLevel: 8 },
      { wheelFormula: "6х2/4", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3899", cost: 38880, unlockLevel: 8 },
      { wheelFormula: "6х2 Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3394", cost: 42360, unlockLevel: 10 },
      { wheelFormula: "6х2/4 Подъемная ось", totalNumberOfAxles: 3, numberOfDrivenAxles: 1, wheelbase: "3899", cost: 48840, unlockLevel: 12 },
      { wheelFormula: "6х4", totalNumberOfAxles: 3, numberOfDrivenAxles: 2, wheelbase: "4753", cost: 57360, unlockLevel: 14 }
    ],
    cabins: [
      { name: "Спальная", cost: 21960, unlockLevel: 0 },
      { name: "Высокая спальная", cost: 42480, unlockLevel: 8 }
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
  }
]

const trailers: Trailer[] = [
  {
    manufacturer: "Standard Trailers",
    model: "L0G",
    imagePath: "/images/trailers/standard_log.png",
    trailerType: "Одиночный прицеп",
    bodyType: "Лесовоз",
    bodyInternalDimensions: {
      length: 13620,
      height: 2650,
      width: 2550
    },
    curbWeight: 5900,
    numberOfAxles: 3,
    numberOfLiftAxles: 1,
    numberOfSteeredAxles: 0,
    overallLength: 13.7,
    cargoTypesTransported: ["Брёвна", "Балки", "Трубы"]
  },
  {
  manufacturer: "Standard Trailers",
  model: "STD",
  imagePath: "/images/trailers/standard_std.png",
  trailerType: "Одиночный прицеп",
  bodyType: "Шторный",
  bodyInternalDimensions: {
    length: 13620,
    height: 2650,
    width: 2480
  },
  curbWeight: 5860,
  numberOfAxles: 2,
  numberOfLiftAxles: 0,
  numberOfSteeredAxles: 0,
  overallLength: 13.7,
  cargoTypesTransported: ["Общий", "Сухие товары"]
  },
  {
    manufacturer: "Standard Trailers",
    model: "FLB",
    imagePath: "/images/trailers/standard_flb.png",
    trailerType: "Одиночный прицеп",
    bodyType: "Платформа",
    bodyInternalDimensions: {
      length: 13620,
      height: 2650,
      width: 2550
    },
    curbWeight: 5300,
    numberOfAxles: 2,
    numberOfLiftAxles: 0,
    numberOfSteeredAxles: 0,
    overallLength: 13.7,
    cargoTypesTransported: ["Строительное оборудование", "Строительные материалы"]
  },
  {
  manufacturer: "Krone",
  model: "Profi Liner Building",
  imagePath: "/images/trailers/krone_profi_liner_building.png",
  trailerType: "Одиночный прицеп",
  bodyType: "Бортовой",
  bodyInternalDimensions: {
    length: 13620,
    height: 2650,
    width: 2480
  },
  curbWeight: 6360,
  numberOfAxles: 3,
  numberOfLiftAxles: 1,
  numberOfSteeredAxles: 0,
  overallLength: 13.7,
  cargoTypesTransported: ["Строительное оборудование", "Строительные материалы"]
  },
  {
    manufacturer: "Krone",
    model: "Cool Liner",
    imagePath: "/images/trailers/krone_cool_liner.png",
    trailerType: "Одиночный прицеп",
    bodyType: "Рефрижератор",
    bodyInternalDimensions: {
      length: 13310,
      height: 2650,
      width: 2470
    },
    curbWeight: 8360,
    numberOfAxles: 3,
    numberOfLiftAxles: 1,
    numberOfSteeredAxles: 0,
    overallLength: 13.7,
    cargoTypesTransported: ["Замороженные товары", "Охлажденные товары"]
  },
  {
    manufacturer: "Schwarzmüller",
    model: "Низкорамный трал с гуськом",
    imagePath: "/images/trailers/schwarz_tral.png",
    trailerType: "Одиночный прицеп",
    bodyType: "Низкорамный трал",
    bodyInternalDimensions: {
      length: 9230,
      height: 3070,
      width: 2550
    },
    curbWeight: 8800,
    numberOfAxles: 3,
    numberOfLiftAxles: 0,
    numberOfSteeredAxles: 1,
    overallLength: 14040,
    cargoTypesTransported: ["Тяжёлая техника", "Высокие грузы"]
  },
  {
    manufacturer: "Schwarzmüller",
    model: "Пищевая цистерна",
    imagePath: "/images/trailers/schwarz_food_tank.png",
    trailerType: "Одиночный прицеп",
    bodyType: "Пищевая цистерна",
    bodyInternalDimensions: {
      length: 13620,
      height: 2860,
      width: 2480
    },
    curbWeight: 6800,
    numberOfAxles: 3,
    numberOfLiftAxles: 0,
    numberOfSteeredAxles: 0,
    overallLength: 11300,
    cargoTypesTransported: ["Пищевые жидкости"]
  }
]

const maps: Map[] = [
  {
    type: "BASE_GAME",
    countries: [
    {
      "name": "Австрия",
      "capital": { "name": "Вена" },
      "cities": [
        { "name": "Вена" },
        { "name": "Грац" },
        { "name": "Зальцбург" },
        { "name": "Инсбрук" },
        { "name": "Клагенфурт-ам-Вёртерзе" },
        { "name": "Линц" }
      ]
    },
    {
      "name": "Бельгия",
      "capital": { "name": "Брюссель" },
      "cities": [
        { "name": "Брюссель" },
        { "name": "Льёж" }
      ]
    },
    {
      "name": "Великобритания",
      "capital": { "name": "Лондон" },
      "cities": [
        { "name": "Лондон" },
        { "name": "Абердин" },
        { "name": "Бирмингем" },
        { "name": "Глазго" },
        { "name": "Гримсби" },
        { "name": "Дувр" },
        { "name": "Кардифф" },
        { "name": "Карлайл" },
        { "name": "Кембридж" },
        { "name": "Ливерпуль" },
        { "name": "Манчестер" },
        { "name": "Ньюкасл-апон-Тайн" },
        { "name": "Плимут" },
        { "name": "Саутгемптон" },
        { "name": "Суонси" },
        { "name": "Фликстоу" },
        { "name": "Шеффилд" },
        { "name": "Эдинбург" }
      ]
    },
    {
      "name": "Германия",
      "capital": { "name": "Берлин" },
      "cities": [
        { "name": "Берлин" },
        { "name": "Бремен" },
        { "name": "Гамбург" },
        { "name": "Ганновер" },
        { "name": "Дортмунд" },
        { "name": "Дрезден" },
        { "name": "Дуйсбург" },
        { "name": "Дюссельдорф" },
        { "name": "Кассель" },
        { "name": "Кёльн" },
        { "name": "Киль" },
        { "name": "Лейпциг" },
        { "name": "Магдебург" },
        { "name": "Мангейм" },
        { "name": "Мюнхен" },
        { "name": "Нюрнберг" },
        { "name": "Оснабрюк" },
        { "name": "Росток" },
        { "name": "Травемюнде" },
        { "name": "Франкфурт-на-Майне" },
        { "name": "Штутгарт" },
        { "name": "Эрфурт" }
      ]
    },
    {
      "name": "Италия",
      "capital": { "name": "Рим" },
      "cities": [
        { "name": "Венеция" },
        { "name": "Верона" },
        { "name": "Милан" },
        { "name": "Триест" },
        { "name": "Турин" }
      ]
    },
    {
      "name": "Люксембург",
      "capital": { "name": "Люксембург" },
      "cities": [
        { "name": "Люксембург" }
      ]
    },
    {
      "name": "Нидерланды",
      "capital": { "name": "Амстердам" },
      "cities": [
        { "name": "Амстердам" },
        { "name": "Гронинген" },
        { "name": "Роттердам" }
      ]
    },
    {
      "name": "Польша",
      "capital": { "name": "Варшава" },
      "cities": [
        { "name": "Вроцлав" },
        { "name": "Познань" },
        { "name": "Щецин" }
      ]
    },
    {
      "name": "Словакия",
      "capital": { "name": "Братислава" },
      "cities": [
        { "name": "Братислава" }
      ]
    },
    {
      "name": "Франция",
      "capital": { "name": "Париж" },
      "cities": [
        { "name": "Дижон" },
        { "name": "Кале" },
        { "name": "Лилль" },
        { "name": "Лион" },
        { "name": "Мец" },
        { "name": "Париж" },
        { "name": "Реймс" },
        { "name": "Страсбург" }
      ]
    },
    {
      "name": "Чехия",
      "capital": { "name": "Прага" },
      "cities": [
        { "name": "Прага" },
        { "name": "Брно" }
      ]
    },
    {
      "name": "Швейцария",
      "capital": { "name": "Берн" },
      "cities": [
        { "name": "Берн" },
        { "name": "Женева" },
        { "name": "Цюрих" }
      ]
    }
  ],    
  imagePath: "/images/map/map_full.jpg"
  },
{
  "type": "DLC",
  "countries": [
    {
      "name": "Франция",
      "capital": { "name": "Париж" },
      "cities": [
        { "name": "Аяччо" },
        { "name": "Байонна" },
        { "name": "Бастия" },
        { "name": "Бонифачо" },
        { "name": "Бордо" },
        { "name": "Брест" },
        { "name": "Бурж" },
        { "name": "Гавр" },
        { "name": "Гольфеш" },
        { "name": "Кальви" },
        { "name": "Клермон-Ферран" },
        { "name": "Лак" },
        { "name": "Ла-Рошель" },
        { "name": "Ле-Ман" },
        { "name": "Л’Иль-Рус" },
        { "name": "Лимож" },
        { "name": "Марсель" },
        { "name": "Монпелье" },
        { "name": "Нант" },
        { "name": "Ницца" },
        { "name": "Палюэль" },
        { "name": "Порто-Веккьо" },
        { "name": "Рен" },
        { "name": "Роскоф" },
        { "name": "Сент-Альбан-дю-Рон" },
        { "name": "Сен-Лоран" },
        { "name": "Сиво" },
        { "name": "Тулуза" }
      ]
    }
  ],
  "imagePath": "/images/map/map_vive_la_france.jpg"
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
    tag: "Расширение карты",
    content: "13 городов, 4 страны",
    releaseDate: new Date("2013-09-20")
  },
  {
    name: "Halloween Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "8 пугающих раскрасок",
    releaseDate: new Date("2013-10-24")
  },
  {
    name: "Ice Cold Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 зимних раскрасок",
    releaseDate: new Date("2013-12-10")
  },
  {
    name: "Force of Nature Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 раскрасок, вдохновлённых стихиями природы",
    releaseDate: new Date("2014-04-04")
  },
  {
    name: "Metallic Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "10 раскрасок типа металлик",
    releaseDate: new Date("2014-05-19")
  },
  {
    name: "UK Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 британских раскраски",
    releaseDate: new Date("2014-05-20")
  },
  {
    name: "Irish Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 ирландских раскраски",
    releaseDate: new Date("2014-05-20")
  },
  {
    name: "Scottish Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 шотландских раскраски",
    releaseDate: new Date("2014-05-20")
  },
  {
    name: "Flip Paint Designs",
    tag: "Набор раскрасок",
    content: "11 настраиваемых раскрасок, использующих «flip-flake» эффект",
    releaseDate: new Date("2014-05-29")
  },
  {
    name: "Brazilian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 бразильские раскраски",
    releaseDate: new Date("2014-06-11")
  },
  {
    name: "Polish Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 польских раскраски",
    releaseDate: new Date("2014-07-01")
  },
  {
    name: "Canadian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 канадских раскраски",
    releaseDate: new Date("2014-07-01")
  },
  {
    name: "USA Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 американских раскраски",
    releaseDate: new Date("2014-07-03")
  },
  {
    name: "Fantasy Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 фантастических раскрасок",
    releaseDate: new Date("2014-07-15")
  },
  {
    name: "High Power Cargo Pack",
    tag: "Набор грузов",
    content: "7 новых тяжелых грузов",
    releaseDate: new Date("2014-08-14")
  },
  {
    name: "German Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 немецких раскраски",
    releaseDate: new Date("2014-10-01")
  },
  {
    name: "French Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 французских раскраски",
    releaseDate: new Date("2014-10-10")
  },
  {
    name: "Czech Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 чешских раскраски",
    releaseDate: new Date("2014-10-24")
  },
  {
    name: "Christmas Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 рождественских раскрасок",
    releaseDate: new Date("2014-12-03")
  },
  {
    name: "Russian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 российских раскраски",
    releaseDate: new Date("2015-03-23")
  },
  {
    name: "Viking Legends",
    tag: "Набор раскрасок",
    content: "6 раскрасок с тематикой викингов",
    releaseDate: new Date("2015-05-06")
  },
  {
    name: "Norwegian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 норвежских раскраски",
    releaseDate: new Date("2015-05-06")
  },
  {
    name: "Swedish Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 шведских раскраски",
    releaseDate: new Date("2015-05-06")
  },
  {
    name: "Danish Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 датских раскраски",
    releaseDate: new Date("2015-05-06")
  },
  {
    name: "Scandinavia",
    tag: "Расширение карты",
    content: "27 городов, 3 страны, груз «живой скот» (коровы)",
    releaseDate: new Date("2015-05-06")
  },
  {
    name: "Prehistoric Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 раскрасок с доисторической тематикой",
    releaseDate: new Date("2015-07-28")
  },
  {
    name: "Cabin Accessories",
    tag: "Тюнинг",
    content: "Аксессуары в салон тягача",
    releaseDate: new Date("2015-09-30")
  },
  {
    name: "Japanese Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 японских раскраски",
    releaseDate: new Date("2015-11-09")
  },
  {
    name: "Wheel Tuning Pack",
    tag: "Тюнинг",
    content: "Новые колёса и тюнинг",
    releaseDate: new Date("2016-04-13")
  },
  {
    name: "Hungarian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "5 венгерских раскрасок",
    releaseDate: new Date("2016-04-16")
  },
  {
    name: "Turkish Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 турецких раскраски",
    releaseDate: new Date("2016-04-19")
  },
  {
    name: "Italian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 итальянских раскраски",
    releaseDate: new Date("2016-05-04")
  },
  {
    name: "Slovak Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 словацких раскраски",
    releaseDate: new Date("2016-05-04")
  },
  {
    name: "Spanish Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "5 испанских раскрасок",
    releaseDate: new Date("2016-06-01")
  },
  {
    name: "Window Flags",
    tag: "Тюнинг",
    content: "Флаги стран и не только, которые можно устанавливать на окна тягачей",
    releaseDate: new Date("2016-06-08")
  },
  {
    name: "Chinese Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 китайских раскраски",
    releaseDate: new Date("2016-06-21")
  },
  {
    name: "South Korean Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 южнокорейских раскраски",
    releaseDate: new Date("2016-06-21")
  },
  {
    name: "Mighty Griffin Tuning Pack",
    tag: "Тюнинг",
    content: "Расширенный тюнинг для тягачей Scania",
    releaseDate: new Date("2016-06-23")
  },
  {
    name: "Austrian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 австрийских раскраски",
    releaseDate: new Date("2016-07-15")
  },
  {
    name: "Swiss Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 швейцарских раскраски",
    releaseDate: new Date("2016-07-15")
  },
  {
    name: "Schwarzmüller Trailer Pack",
    tag: "Набор трейлеров",
    content: "5 лицензированных трейлеров и аксессуары в салон тягача",
    releaseDate: new Date("2016-09-16")
  },
  {
    name: "Pirate Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 раскраски с пиратской тематикой",
    releaseDate: new Date("2016-09-19")
  },
  {
    name: "Finnish Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 финских раскраски",
    releaseDate: new Date("2016-12-01")
  },
  {
    name: "Belgian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 бельгийских раскраски",
    releaseDate: new Date("2016-12-01")
  },
  {
    name: "Vive la France!",
    tag: "Расширение карты",
    content: "23 французских города, новые компании и достижения",
    releaseDate: new Date("2016-12-05")
  },
  {
    name: "Michelin Fan Pack",
    tag: "Тюнинг",
    content: "Шины, раскраски и аксессуары в салон тягача",
    releaseDate: new Date("2017-01-10")
  },
  {
    name: "Australian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 австралийских раскраски",
    releaseDate: new Date("2017-01-20")
  },
  {
    name: "Romanian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 румынских раскраски",
    releaseDate: new Date("2017-01-20")
  },
  {
    name: "Dragon Truck Design Pack",
    tag: "Набор раскрасок",
    content: "Раскраски в стиле Китайского Нового Года",
    releaseDate: new Date("2017-02-02")
  },
  {
    name: "Valentine's Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "7 раскрасок ко дню Святого Валентина и 1 аксессуар в кабину",
    releaseDate: new Date("2017-02-10")
  },
  {
    name: "Raven Truck Design Pack",
    tag: "Тюнинг",
    content: "Раскраски, аксессуары для кабины и диски для колёс",
    releaseDate: new Date("2017-03-07")
  },
  {
    name: "Heavy Cargo Pack",
    tag: "Набор грузов",
    content: "8 негабаритных грузов, 2 трейлера",
    releaseDate: new Date("2017-05-12")
  },
  {
    name: "XF Tuning Pack",
    tag: "Тюнинг",
    content: "Расширенный тюнинг для тягачей DAF",
    releaseDate: new Date("2017-08-18")
  },
  {
    name: "Italia",
    tag: "Расширение карты",
    content: "22 итальянских города, новые компании и достижения",
    releaseDate: new Date("2017-12-05")
  },
  {
    name: "Special Transport",
    tag: "Набор грузов",
    content: "11 тяжёлых грузов, 4 специальных трейлера, новые игровые механики",
    releaseDate: new Date("2017-12-13")
  },
  {
    name: "Portuguese Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 португальских раскраски",
    releaseDate: new Date("2018-06-08")
  },
  {
    name: "Dutch Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 нидерландских раскраски",
    releaseDate: new Date("2018-07-26")
  },
  {
    name: "Space Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 космических раскрасок и аксессуары в салон тягача",
    releaseDate: new Date("2018-08-31")
  },
  {
    name: "Krone Trailer Pack",
    tag: "Набор трейлеров",
    content: "6 лицензированных трейлеров, тюнинг, аксессуары в кабину и раскраски",
    releaseDate: new Date("2018-09-17")
  },
  {
    name: "Beyond the Baltic Sea",
    tag: "Расширение карты",
    content: "35 городов, 5 стран",
    releaseDate: new Date("2018-11-29")
  },
  {
    name: "Estonian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 эстонских раскраски",
    releaseDate: new Date("2018-11-29")
  },
  {
    name: "Latvian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 латвийских раскраски",
    releaseDate: new Date("2018-11-29")
  },
  {
    name: "Lithuanian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 литовских раскраски",
    releaseDate: new Date("2018-11-29")
  },
  {
    name: "Goodyear Tyres Pack",
    tag: "Тюнинг",
    content: "Шины, раскраски и аксессуары в салон тягача",
    releaseDate: new Date("2019-08-02")
  },
  {
    name: "Actros Tuning Pack",
    tag: "Тюнинг",
    content: "Расширенный тюнинг для тягачей Mercedes-Benz",
    releaseDate: new Date("2019-09-04")
  },
  {
    name: "Pink Ribbon Charity Pack",
    tag: "Набор раскрасок",
    content: "3 раскраски «Розовая лента»",
    releaseDate: new Date("2019-10-01")
  },
  {
    name: "Road to the Black Sea",
    tag: "Расширение карты",
    content: "30 городов, 3 страны, новые компании",
    releaseDate: new Date("2019-12-05")
  },
  {
    name: "Bulgarian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 болгарских раскраски",
    releaseDate: new Date("2019-12-05")
  },
  {
    name: "HS-Schoch Tuning Pack",
    tag: "Тюнинг",
    content: "Немного тюнинг-деталей от HS-Schoch для тягачей всех производителей",
    releaseDate: new Date("2020-03-19")
  },
  {
    name: "FH Tuning Pack",
    tag: "Тюнинг",
    content: "Расширенный тюнинг для тягачей Volvo",
    releaseDate: new Date("2020-06-02")
  },
  {
    name: "Super Stripes Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 уникальных «полосатых» раскрасок для тягачей и 2 для трейлеров",
    releaseDate: new Date("2020-09-17")
  },
  {
    name: "Lunar New Year Pack",
    tag: "Набор раскрасок",
    content: "12 уникальных раскрасок к Китайскому Новому Году",
    releaseDate: new Date("2021-02-10")
  },
  {
    name: "Iberia",
    tag: "Расширение карты",
    content: "Испания и Португалия, 51 город",
    releaseDate: new Date("2021-04-08")
  },
  {
    name: "Volvo Construction Equipment DLC",
    tag: "Набор грузов",
    content: "7 лицензированных грузов с тематикой Volvo для перевозки",
    releaseDate: new Date("2021-09-23")
  },
  {
    name: "Ukrainian Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "4 украинские раскраски",
    releaseDate: new Date("2022-03-04")
  },
  {
    name: "Renault Trucks T Tuning Pack",
    tag: "Тюнинг",
    content: "Расширенный тюнинг для Renault T",
    releaseDate: new Date("2022-05-25")
  },
  {
    name: "Street Art Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 уникальных раскрасок в стиле Street Art",
    releaseDate: new Date("2022-11-07")
  },
  {
    name: "Feldbinder Trailer Pack",
    tag: "Набор трейлеров",
    content: "4 лицензированных трейлера, детали для тюнинга, аксессуары в салон и раскраски",
    releaseDate: new Date("2022-11-30")
  },
  {
    name: "Wielton Trailer Pack",
    tag: "Набор трейлеров",
    content: "6 лицензированных трейлеров, детали для тюнинга, аксессуары в салон и раскраски",
    releaseDate: new Date("2023-07-17")
  },
  {
    name: "Modern Lines Paint Jobs Pack",
    tag: "Набор раскрасок",
    content: "6 «современных» раскрасок для тягачей и трейлеров",
    releaseDate: new Date("2023-09-11")
  },
  {
    name: "West Balkans",
    tag: "Расширение карты",
    content: "30 городов в восьми странах",
    releaseDate: new Date("2023-10-19")
  },
  {
    name: "TIRSAN Trailer Pack",
    tag: "Набор трейлеров",
    content: "6 лицензированных трейлеров, детали для тюнинга, аксессуары в салон и раскраски",
    releaseDate: new Date("2023-10-30")
  },
  {
    name: "JCB Equipment Pack",
    tag: "Набор грузов",
    content: "8 лицензированных грузов с тематикой JCB для перевозки + новые аксессуары в салон тягача",
    releaseDate: new Date("2024-05-23")
  },
  {
    name: "Schmitz Cargobull Trailer Pack",
    tag: "Набор трейлеров",
    content: "6 лицензированных трейлеров, детали для тюнинга, аксессуары в салон и раскраски",
    releaseDate: new Date("2024-07-22")
  },
  {
    name: "Kässbohrer Trailer Pack",
    tag: "Набор трейлеров",
    content: "9 лицензированных трейлеров + 9 аксессуаров в салон тягача",
    releaseDate: new Date("2024-09-18")
  },
  {
    name: "Greece",
    tag: "Расширение карты",
    content: "Вся Греция",
    releaseDate: new Date("2024-12-04")
  }
]
const carDealerships: CarDealership[] = [
  {
    name: "DAF",
    locations: [
      {
        country: "Великобритания",
        cities: ["Глазго", "Кардифф"]
      },
      {
        country: "Испания",
        cities: ["Севилья", "Бургос"]
      },
      {
        country: "Италия",
        cities: ["Катания"]
      },
      {
        country: "Нидерланды",
        cities: ["Амстердам"]
      },
      {
        country: "Россия",
        cities: ["Санкт-Петербург"]
      },
      {
        country: "Франция",
        cities: ["Бордо"]
      }
    ]
  },
  {
    name: "Iveco",
    locations: [
      {
        country: "Австрия",
        cities: ["Вена", "Зальцбург"]
      },
      {
        country: "Германия",
        cities: ["Франкфурт-на-Майне", "Берлин", "Мюнхен", "Бремен", "Дортмунд", "Гамбург"]
      },
      {
        country: "Дания",
        cities: ["Копенгаген"]
      },
      {
        country: "Испания",
        cities: ["Сарагоса", "Альмерия", "Хихон"]
      },
      {
        country: "Италия",
        cities: ["Рим", "Турин"]
      },
      {
        country: "Румыния",
        cities: ["Бухарест", "Констанца", "Яссы", "Клуж-Напока", "Галац"]
      },
      {
        country: "Финляндия",
        cities: ["Хельсинки"]
      },
      {
        country: "Франция",
        cities: ["Ле-Ман"]
      }
    ]
  },
  {
    name: "MAN",
    locations: [
      {
        country: "Албания",
        cities: ["Тирана"]
      },
      {
        country: "Германия",
        cities: ["Берлин", "Мюнхен", "Дортмунд"]
      },
      {
        country: "Греция",
        cities: ["Янина", "Салоники", "Ламия", "Каламата"]
      },
      {
        country: "Испания",
        cities: ["Мадрид", "Кордоба"]
      },
      {
        country: "Латвия",
        cities: ["Рига"]
      },
      {
        country: "Португалия",
        cities: ["Порту"]
      },
      {
        country: "Румыния",
        cities: ["Клуж-Напока"]
      },
      {
        country: "Франция",
        cities: ["Марсель", "Аяччо", "Париж", "Лион"]
      },
      {
        country: "Босния и Герцеговина",
        cities: ["Тузла"]
      },
      {
        country: "Великобритания",
        cities: ["Бирмингем", "Эдинбург", "Манчестер"]
      }
    ]
  },
  {
    name: "Mercedes-Benz",
    locations: [
      {
        country: "Германия",
        cities: ["Штутгарт", "Дуйсбург", "Росток", "Ганновер"]
      },
      {
        country: "Испания",
        cities: ["Бадахос", "Вальядолид", "Барселона", "Малага"]
      },
      {
        country: "Италия",
        cities: ["Кальяри", "Болонья", "Неаполь"]
      },
      {
        country: "Польша",
        cities: ["Варшава", "Краков", "Щецин"]
      },
      {
        country: "Турция",
        cities: ["Стамбул"]
      },
      {
        country: "Черногория",
        cities: ["Подгорица"]
      },
      {
        country: "Швейцария",
        cities: ["Женева", "Цюрих"]
      },
      {
        country: "Великобритания",
        cities: ["Ньюкасл-апон-Тайн", "Плимут"]
      }
    ]
  },
  {
    name: "Renault Trucks",
    locations: [
      {
        country: "Болгария",
        cities: ["София"]
      },
      {
        country: "Венгрия",
        cities: ["Будапешт", "Сегед"]
      },
      {
        country: "Испания",
        cities: ["Барселона"]
      },
      {
        country: "Франция",
        cities: ["Лион", "Париж", "Тулуза", "Бурж"]
      },
      {
        country: "Чехия",
        cities: ["Прага"]
      },
      {
        country: "Великобритания",
        cities: ["Филикстоу"]
      }
    ]
  },
  {
    name: "Scania",
    locations: [
      {
        country: "Великобритания",
        cities: ["Манчестер", "Бирмингем", "Эдинбург"]
      },
      {
        country: "Германия",
        cities: ["Ганновер", "Нюрнберг", "Дрезден"]
      },
      {
        country: "Италия",
        cities: ["Милан", "Флоренция", "Верона"]
      },
      {
        country: "Португалия",
        cities: ["Лиссабон"]
      },
      {
        country: "Румыния",
        cities: ["Питешти"]
      },
      {
        country: "Хорватия",
        cities: ["Загреб", "Риека", "Сплит"]
      },
      {
        country: "Швеция",
        cities: ["Стокгольм", "Гётеборг", "Линчёпинг"]
      },
      {
        country: "Эстония",
        cities: ["Таллин"]
      },
      {
        country: "Босния и Герцеговина",
        cities: ["Баня-Лука"]
      }
    ]
  },
  {
    name: "Volvo",
    locations: [
      {
        country: "Болгария",
        cities: ["Пловдив"]
      },
      {
        country: "Великобритания",
        cities: ["Лондон", "Гримсби", "Абердин"]
      },
      {
        country: "Испания",
        cities: ["Альбасете"]
      },
      {
        country: "Италия",
        cities: ["Неаполь"]
      },
      {
        country: "Литва",
        cities: ["Вильнюс", "Каунас"]
      },
      {
        country: "Люксембург",
        cities: ["Люксембург"]
      },
      {
        country: "Румыния",
        cities: ["Брашов"]
      },
      {
        country: "Франция",
        cities: ["Лимож", "Нант"]
      },
      {
        country: "Финляндия",
        cities: ["Лахти"]
      },
      {
        country: "Норвегия",
        cities: ["Осло"]
      },
      {
        country: "Словакия",
        cities: ["Братислава"]
      }
    ]
  }
];
export default {
  trucks,
  trailers,
  maps,
  dlcs,
  carDealerships,
};