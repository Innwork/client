import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {
  BookingStateType,
  PersonalInfoType,
  TariffItem,
  Tariffs, TReservationData,
  WorkspaceItem,
} from "@src/app/redux/Booking/BookingTypes";
import {postReservationData, TDataTG} from "@src/app/redux/Booking/actions";
import {getTariffPrice, getWorkspaces} from "@src/app/redux/Booking/utils";
import {TelegramService} from "@src/entities/telegram/telegram.service";


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
  areInputsValid: {},
  reservationData: {} as TReservationData
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
        .addCase(postReservationData.fulfilled, (state, {payload}: PayloadAction<TReservationData>) => {
          state.isOpen = false
          state.formStatus = "fulfilled"
          state.reservationData = payload

          const tariffs = state.cartTariffs.map((tariff) => {
            return {
              "namePackages": tariff.tariffName,
              "price": tariff.price,
              "date": `${tariff.duration}${tariff.tariffName === Tariffs.NON_FIXED_FLEXI_DESK ? (' ' + tariff.time) : tariff.additional}`,
              "persons": tariff.tariffName === Tariffs.PRIVATE_OFFICE ? state.PWSpeopleCount.toString() : undefined
            }
          })

          const workspaces = state.workspaces.map((workspace) => {
            return {
              "namePackages": workspace.workspaceName,
              "price": workspace.price,
              "date": `${workspace.duration}${' ' + workspace.time}`,
            }
          })

          const data = {
            "IdOrder": state.reservationData.numberOrder.toString(),
            "person": {
              "name": state.personalInfo.firstName,
              "lastName": state.personalInfo.lastName,
              "email": state.personalInfo.email,
              "telephone": state.personalInfo.phone,
            },
            "packages": [
              ...workspaces,
              ...tariffs
            ]
          }

          TelegramService.postReservationDataTg(data as TDataTG).then()
        })
        .addCase(postReservationData.rejected, (state) => {
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
export const selectReservationData = (state: RootState) => state.booking.reservationData

export default bookingSlice.reducer
export const BookingActions = bookingSlice.actions