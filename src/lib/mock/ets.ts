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
    imagePath: "/image/trucks/daf_xf.png",
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
    imagePath: "/image/trucks/man_tgx_2020.png",
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
    "name": "Scania",
    "locations": [
      {
        "country": "Германия",
        "cities": ["Берлин", "Гамбург", "Мюнхен"]
      },
      {
        "country": "Швеция",
        "cities": ["Стокгольм", "Гётеборг"]
      },
      {
        "country": "Великобритания",
        "cities": ["Лондон", "Манчестер"]
      }
    ]
  },
  {
    "name": "Volvo",
    "locations": [
      {
        "country": "Швеция",
        "cities": ["Стокгольм", "Гётеборг"]
      },
      {
        "country": "Германия",
        "cities": ["Берлин", "Кёльн"]
      },
      {
        "country": "Франция",
        "cities": ["Париж", "Лион"]
      }
    ]
  },
  {
    "name": "Mercedes-Benz",
    "locations": [
      {
        "country": "Германия",
        "cities": ["Берлин", "Гамбург", "Мюнхен", "Кёльн"]
      },
      {
        "country": "Великобритания",
        "cities": ["Лондон", "Бирмингем"]
      },
      {
        "country": "Франция",
        "cities": ["Париж", "Марсель"]
      }
    ]
  },
  {
    "name": "MAN",
    "locations": [
      {
        "country": "Германия",
        "cities": ["Берлин", "Мюнхен", "Дортмунд"]
      },
      {
        "country": "Австрия",
        "cities": ["Вена", "Зальцбург"]
      },
      {
        "country": "Чехия",
        "cities": ["Прага"]
      }
    ]
  },
  {
    "name": "DAF",
    "locations": [
      {
        "country": "Нидерланды",
        "cities": ["Амстердам", "Роттердам"]
      },
      {
        "country": "Великобритания",
        "cities": ["Лондон", "Шеффилд"]
      },
      {
        "country": "Германия",
        "cities": ["Гамбург", "Кёльн"]
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