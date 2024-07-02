import {oddsI} from "@src/app/redux/Booking/BookingTypes";

export const odds:oddsI = {
  fixedDesk: {
    1: 1,
    3: 0.85,
    6: 0.7,
    12: 0.55
  },
  privateOffice: {
    3: 1.2,
    6: 1.1,
    12: 1
  }
}