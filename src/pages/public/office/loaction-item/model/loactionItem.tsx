export type LocationItemType = {
  name: string;
  location: string;
};

export type LocItemModelType = {
  [key: string]: LocationItemType;
};

export const LocationItemModel:LocItemModelType = {
  "amiryan": {
    name: "Амирян",
    location: "улица Арсена Амиряна, 4/2" 
  },
  "dzorap": {
    name: "Дзорап",
    location: "улица Дзорапа, 70/3"
  },
  "antarain": {
    name: "Антараин",
    location: "улица Верин Антараин, 138/2"
  }
}