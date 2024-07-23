import { LocCardType } from "../components/loc-card/type/LocCardType"

import Dzorap1 from "@assets/img/location/dzorap/photo_2024-07-22_14-39-13.jpg";
import Dzorap2 from "@assets/img/location/dzorap/photo_2024-07-22_14-39-14.jpg";
import Dzorap3 from "@assets/img/location/dzorap/photo_2024-07-22_14-39-15.jpg";

import Antarain1 from "@assets/img/location/antarain/photo_2024-07-23_16-42-51.jpg";
import Antarain2 from "@assets/img/location/antarain/photo_2024-07-23_14-25-21.jpg";
import Antarain3 from "@assets/img/location/antarain/photo_2024-07-23_14-25-20.jpg";
import Anrarain4 from "@assets/img/location/antarain/photo_2024-07-23_14-25-19.jpg"


export const LocationModel:Array<LocCardType> = [
  {
    img: [Dzorap1, Dzorap2, Dzorap3],
    name: "Дзорап",
    location: "улица Дзорапа, 70/3",
    desc: "На улице Дзорапа, 70/3, находится современный бизнес-центр, предлагающий широкий спектр услуг для арендаторов. В здании имеются высокотехнологичные офисные помещения, оборудованные всем необходимым для эффективной работы, включая высокоскоростной интернет и системы видеоконференций.",
    area: 1200,
    jobs: 200,
    floor: 8,
    path: "dzorap"
  },
  {
    img: [Antarain1, Antarain2, Antarain3, Anrarain4],
    name: "Антараин",
    location: "улица Верин Антараин, 138/2",
    desc: "Бизнес-центр на улице Верин Антараин, 138/2, предлагает современные офисные помещения в престижном районе Еревана. Здание оборудовано всем необходимым для комфортной работы: высокоскоростным интернетом, конференц-залами и просторными офисами с панорамными окнами, обеспечивающими естественное освещение.",
    area: 1200,
    jobs: 200,
    floor: 4,
    path: "antarain"
  },
  {
    img: [Dzorap1],
    name: "Амирян",
    location: "улица Арсена Амиряна, 4/2",
    desc: "Бизнес-центр на улице Арсена Амиряна, 4/2, предлагает аренду офисных помещений в самом сердце Еревана. Современное здание оснащено всеми необходимыми удобствами: от высокоскоростного интернета и системы кондиционирования до конференц-залов и переговорных комнат.",
    area: 1200,
    jobs: 200,
    floor: 2,
    path: "amiryan"
  }
]