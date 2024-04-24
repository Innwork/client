import bookingSlice from "@src/app/redux/Booking/BookingSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    booking: bookingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

