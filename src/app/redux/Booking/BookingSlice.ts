import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {
  BookingStateType,
  PersonalInfoType,
  TariffItem,
  Tariffs, TFormStatus,
  WorkspaceItem,
} from "@src/app/redux/Booking/BookingTypes";
import {postReservationData} from "@src/app/redux/Booking/actions";
import {getTariffPrice, getWorkspaces} from "@src/app/redux/Booking/utils";


const initialState: BookingStateType = {
  page: 1,
  isFormSent: false,
  formStatus: "pending",
  PWSpeopleCount: 6,
  isOpen: false,
  tariffs: "",
  workspaces: [],
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  cartTariffs: [],
  areInputsValid: {}
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
      setPage(state, {payload}: PayloadAction<number>) {
        state.page = payload
      },
      setIsFormSent(state, {payload}: PayloadAction<boolean>) {
        state.isFormSent = payload
      },
      setIsSending(state, {payload}: PayloadAction<TFormStatus>) {
        state.formStatus = payload
      },
      setPWSpeopleCount(state, {payload}: PayloadAction<number>) {
        state.PWSpeopleCount = payload
      },
      setTariff(state, {payload}: PayloadAction<Tariffs>) {
        state.tariffs = payload
      },
      removeTariff(state) {
        state.tariffs = ""
      },
      setIsOpen(state, {payload}: PayloadAction<boolean>) {
        state.isOpen = payload
      },
      setWorkspace(state, {payload}: PayloadAction<WorkspaceItem>) {
        state.workspaces = getWorkspaces(state.workspaces, payload)
      },
      removeWorkspace(state, {payload}: PayloadAction<WorkspaceItem>) {
        state.workspaces = state.workspaces.filter(item => ((item.workspaceName + item.duration) != (payload.workspaceName + payload.duration)))
      },
      setCartTariff(state, {payload}: PayloadAction<TariffItem>) {
        const price = getTariffPrice({...payload, PWSpeopleCount: state.PWSpeopleCount})
        state.cartTariffs = [{...payload, price}, ...state.cartTariffs]
      },
      removeCartTariff(state, {payload}: PayloadAction<TariffItem>) {
        state.cartTariffs = state.cartTariffs.filter(item => ((item.tariffName + item.duration) != (payload.tariffName + payload.duration)))
      },
      setPersonalInfo(state, {payload}: PayloadAction<PersonalInfoType>) {
        state.personalInfo = {...state.personalInfo, ...payload}
      },
      setAreInputsValid(state, {payload}: PayloadAction<Record<string, boolean>>) {
        state.areInputsValid = {...state.areInputsValid, ...payload}
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(postReservationData.pending, (state) => {
          state.isFormSent = true
          state.isOpen = false
          state.formStatus = "pending"
        })
        .addCase(postReservationData.fulfilled, (state) => {
          state.isOpen = false
          state.formStatus = "fulfilled"
        })
        .addCase(postReservationData.rejected, (state, {payload}: PayloadAction<unknown>) => {
          console.log(payload)
          state.formStatus = "rejected"
        })
    }
  }
)

export const selectBookingTariffs = (state: RootState) => state.booking.tariffs
export const selectFormStatus = (state: RootState) => state.booking.formStatus
export const selectBookingWorkspace = (state: RootState) => state.booking.workspaces
export const selectBookingPersonalInfo = (state: RootState) => state.booking.personalInfo
export const selectIsBookingOpen = (state: RootState) => state.booking.isOpen
export const selectCartTariffs = (state: RootState) => state.booking.cartTariffs
export const selectAreInputsValid = (state: RootState) => state.booking.areInputsValid
export const selectPWSpeopleCount = (state: RootState) => state.booking.PWSpeopleCount
export const selectIsFormSent = (state: RootState) => state.booking.isFormSent
export const selectPage = (state: RootState) => state.booking.page

export default bookingSlice.reducer
export const BookingActions = bookingSlice.actions