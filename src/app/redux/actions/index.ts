import {BookingActions} from "@src/app/redux/Booking/BookingSlice";
import * as BookingThunks from "@src/app/redux/Booking/actions"

export default {
  ...BookingActions,
  ...BookingThunks
}