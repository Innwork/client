import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {
  BookingStateType,
  PersonalInfoType,
  TariffItem,
  Tariffs,
  WorkspaceItem,
  Workspaces
} from "@src/app/redux/Booking/BookingTypes";
import {postReservationData} from "@src/app/redux/Booking/actions";

interface oddsI {
  "fixedDesk": {
    [key: number]: number;
    1: number,
    3: number,
    6: number,
    12: number
  };
  "privateOffice": {
    [key: number]: number;
    3: number,
    6: number,
    12: number
  }
}

const odds:oddsI = {
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


const initialState: BookingStateType = {
  page: 1,
  isFormSent: false,
  PWSpeopleCount: 6,
  isOpen: false,
  tariffs: [],
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
      setPWSpeopleCount(state, {payload}: PayloadAction<number>) {
        state.PWSpeopleCount = payload
      },
      setTariff(state, {payload}: PayloadAction<Tariffs>) {
        state.tariffs = [payload, ...state.tariffs]
      },
      removeTariff(state, {payload}: PayloadAction<Tariffs>) {
        state.tariffs = state.tariffs.filter(item => item !== payload)
      },
      setIsOpen(state, {payload}: PayloadAction<boolean>) {
        state.isOpen = payload
      },
      setWorkspace(state, {payload}: PayloadAction<WorkspaceItem>) {
        const Workspace = state.workspaces.find(item => (item.workspaceName === payload.workspaceName))
        const getHappyHours = (): number => {
            if (payload.duration && !payload.time) {
              const dates = (payload.duration.split(" - "))
              const dateArray1 = dates[0].split('/')
              const dateArray2 = dates[1].split('/')
              const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
              const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]) + 1,).valueOf()
              return ((date2 - date1) / (60 * 24 * 60 * 1000)) * 11;
            }
            if (!payload.duration && payload.time) {
              const times = payload.time.split(' - ')
              const time1 = Number(times[0].split(':')[0])
              const time2 = Number(times[1].split(':')[0])
              if (time1 >= time2) {
                if (time1 === time2) {
                  return 0
                } else if (time1 > 22) {
                  if (time2 > 22) {
                    return 24 - time1 + time2 - 22
                  } else if (time2 <= 22) {
                    if (time2 >= 9) return 24 - time1 + 9
                  } else return 24 - time1 + time2
                } else if (time1 <= 22) {
                  if (time2 >= 9) {
                    return 11
                  } else if (time2 < 9) {
                    if (time1 >= 9) {
                      return 2 + time2
                    }
                    else return 11 - time1 + time2
                  }
                }
              } else if (time2 > 22) {
                if(time1 >= 22) {
                  return time2 - time1
                } else return time2 - 22
              } else if (time2 <= 22) {
                if (time2 >= 9) {
                  return time2 - time1 - 1
                } else return time2
              }
            }
          return 0
        }

        const getCombinedHappyHours = (duration: string, time: string): number => {
          const dates = duration.split(" - ")
          const dateArray1 = dates[0].split('/')
          const dateArray2 = dates[1].split('/')
          const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
          const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]) + 1,).valueOf()
          const days =  ((date2 - date1) / (60 * 24 * 60 * 1000))

          const times = time.split(' - ')
          const time1 = Number(times[0].split(':')[0])
          const time2 = Number(times[1].split(':')[0])
          if (time1 >= time2) {
            if (time1 === time2) {
              return 0
            } else if (time1 > 22) {
              if (time2 > 22) {
                return (24 - time1 + time2 - 22) * days
              } else if (time2 <= 22) {
                if (time2 >= 9) return (24 - time1 + 9) * days
              } else return (24 - time1 + time2) * days
            } else if (time1 <= 22) {
              if (time2 >= 9) {
                return (11) * days
              } else if (time2 < 9) {
                if (time1 >= 9) {
                  return (2 + time2) * days
                }
                else return (11 - time1 + time2) * days
              }
            }
          } else if (time2 > 22) {
            if(time1 >= 22) {
              return (time2 - time1) * days
            } else return (time2 - 22) * days
          } else if (time2 <= 22) {
            if (time2 >= 9) {
              return (time2 - time1 - 1) * days
            } else return (time2) * days
          }
        }

        const getHours = (): number => {
          if (payload.duration && !payload.time) {
            const dates = (payload.duration.split(" - "))
            const dateArray1 = dates[0].split('/')
            const dateArray2 = dates[1].split('/')
            const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
            const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]) + 1,).valueOf()
            return (date2 - date1) / (60 * 60 * 1000);
          } else if (!payload.duration && payload.time) {
            const times = payload.time.split(' - ')
            const time1 = Number(times[0].split(':')[0])
            const time2 = Number(times[1].split(':')[0])
            if (time1 === time2) return 24
            else if (time2 > time1) return time2 - time1
            else if (time1 > time2) return 24 - time1 + time2
          }

          return 0
        }

        const getCombinedHours = (duration: string, time: string): number => {
          const dates = duration.split(" - ")
          const dateArray1 = dates[0].split('/')
          const dateArray2 = dates[1].split('/')
          const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
          const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]) + 1,).valueOf()
          const days =  ((date2 - date1) / (60 * 24 * 60 * 1000))

          const times = time.split(' - ')
          const time1 = Number(times[0].split(':')[0])
          const time2 = Number(times[1].split(':')[0])
          if (time1 === time2) return 24 * days
          else if (time2 > time1) return (time2 - time1) * days
          else if (time1 > time2) return (24 - time1 + time2) * days

          return 0
        }

        if (!Workspace) {
          if (payload.workspaceName === Workspaces.TRAINING_CENTER) {
            state.workspaces = state.workspaces.filter(item => (item.workspaceName != payload.workspaceName))
            const price = (7000 * (getHours() - getHappyHours()) +  (7000 * 0.8 * getHappyHours())).toString()
            // const price = (7000 * (getHours())).toString()
            state.workspaces = [{...payload, price}, ...state.workspaces]
          } else if (payload.workspaceName === Workspaces.MEETING_ROOM) {
            state.workspaces = state.workspaces.filter(item => (item.workspaceName != payload.workspaceName))
            const price = (5500 * (getHours() - getHappyHours()) +  (5500 * 0.8 * getHappyHours())).toString()
            state.workspaces = [{...payload, price}, ...state.workspaces]
          } else if (payload.workspaceName === Workspaces.BUSINESS_LOUNGE) {
            state.workspaces = state.workspaces.filter(item => (item.workspaceName != payload.workspaceName))
            const price = (10000 * (getHours() - getHappyHours()) +  (10000 * 0.8 * getHappyHours())).toString()
            state.workspaces = [{...payload, price}, ...state.workspaces]
          }
        }
        else {
          const workspaceToPull = {...Workspace, ...payload}
          if (payload.workspaceName === Workspaces.TRAINING_CENTER) {
            state.workspaces = state.workspaces.filter(item => (item.workspaceName != payload.workspaceName))
            const price = (
              (workspaceToPull.duration && workspaceToPull.time)
              ? 7000 * (getCombinedHours(workspaceToPull.duration, workspaceToPull.time) - getCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time)) +  (7000 * 0.8 * getCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time))
              : 7000 * (getHours() - getHappyHours()) +  (7000 * 0.8 * getHappyHours())
              // ? 7000 * (getCombinedHours(workspaceToPull.duration, workspaceToPull.time))
              // : 7000 * getHours()
            ).toString()
            state.workspaces = [{...workspaceToPull, price}, ...state.workspaces]
          } else if (payload.workspaceName === Workspaces.MEETING_ROOM) {
            state.workspaces = state.workspaces.filter(item => (item.workspaceName != payload.workspaceName))
            const price = (
              (workspaceToPull.duration && workspaceToPull.time)
                ? 5500 * (getCombinedHours(workspaceToPull.duration, workspaceToPull.time) - getCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time)) +  (5500 * 0.8 * getCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time))
                : 5500 * (getHours() - getHappyHours()) +  (5500 * 0.8 * getHappyHours())
              // ? 5500 * getCombinedHours(workspaceToPull.duration, workspaceToPull.time)
              // : 5500 * getHours()
            ).toString()
            state.workspaces = [{...workspaceToPull, price}, ...state.workspaces]
          } else if (payload.workspaceName === Workspaces.BUSINESS_LOUNGE) {
            state.workspaces = state.workspaces.filter(item => (item.workspaceName != payload.workspaceName))
            const price = (
                (workspaceToPull.duration && workspaceToPull.time)
                  ? 10000 * (getCombinedHours(workspaceToPull.duration, workspaceToPull.time) - getCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time)) +  (10000 * 0.8 * getCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time))
                  : 10000 * (getHours() - getHappyHours()) +  (10000 * 0.8 * getHappyHours())
              // ? 10000 * getCombinedHours(workspaceToPull.duration, workspaceToPull.time)
              // : 10000 * getHours()
            ).toString()
            state.workspaces = [{...workspaceToPull, price}, ...state.workspaces]
          }
        }
      },
      removeWorkspace(state, {payload}: PayloadAction<WorkspaceItem>) {
        state.workspaces = state.workspaces.filter(item => ((item.workspaceName + item.duration) != (payload.workspaceName + payload.duration)))
      },
      setCartTariff(state, {payload}: PayloadAction<TariffItem>) {
        const getHours = (): number => {
          if (payload.time) {
            const times = payload.time.split(' - ')
            const time1 = Number(times[0].split(':')[0])
            const time2 = Number(times[1].split(':')[0])
            if (time1 === time2) return 24
            else if (time2 > time1) return time2 - time1
            else if (time1 > time2) return 24 - time1 + time2
          }

        }

        const getHappyHours = (): number => {
          if (payload.time) {
            const times = payload.time.split(' - ')
            const time1 = Number(times[0].split(':')[0])
            const time2 = Number(times[1].split(':')[0])
            if (time1 >= time2) {
              if (time1 === time2) {
                return 0
              } else if (time1 > 22) {
                if (time2 > 22) {
                  return 24 - time1 + time2 - 22
                } else if (time2 <= 22) {
                  if (time2 >= 9) return 24 - time1 + 9
                } else return 24 - time1 + time2
              } else if (time1 <= 22) {
                if (time2 >= 9) {
                  return 11
                } else if (time2 < 9) {
                  if (time1 >= 9) {
                    return 2 + time2
                  }
                  else return 11 - time1 +  time2
                }
              }
            } else if (time2 > 22) {
              if(time1 >= 22) {
                return time2 - time1
              } else return time2 - 22
            } else if (time2 <= 22) {
              if (time2 >= 9) {
                return time2 - time1 - 1
              } else return time2
            }
          }
          return 0
        }

        const getPrice = () => {
          if (payload.tariffName === Tariffs.FIXED_DESK) {
            const dates = payload.duration.split(" - ")
            const dateArray1 = dates[0].split('/')
            const dateArray2 = dates[1].split('/')
            const date1 = new Date(Number(dateArray1[0]), Number(dateArray1[1]), Number(dateArray1[2]))
            const date2 = new Date(Number(dateArray2[0]), Number(dateArray2[1]), Number(dateArray2[2]))
            const months =  date2.getMonth() - date1.getMonth() + (12 * (date2.getFullYear() - date1.getFullYear()))
            if (months === 1) return '69000'
            else if (months === 3) return '198000'
            else if (months === 6) return '379000'
            else if (months === 12) return '663000'
            // return (69000 * months * odds.fixedDesk[months]).toFixed(0).toString()
          }
          else if (payload.tariffName === Tariffs.PRIVATE_OFFICE) {
            const dates = payload.duration.split(" - ")
            const dateArray1 = dates[0].split('/')
            const dateArray2 = dates[1].split('/')
            const date1 = new Date(Number(dateArray1[0]), Number(dateArray1[1]), Number(dateArray1[2]))
            const date2 = new Date(Number(dateArray2[0]), Number(dateArray2[1]), Number(dateArray2[2]))
            const months =  (date2.getMonth() - date1.getMonth()) === 0 ? 12 : (date2.getMonth() - date1.getMonth())
            return (100000 * months * odds.privateOffice[months] * state.PWSpeopleCount).toString()
          }
          else if (payload.tariffName === Tariffs.NON_FIXED_FLEXI_DESK){
            // const dates = (payload.duration.split(" - "))
            // const dateArray1 = dates[0].split('/')
            // const dateArray2 = dates[1].split('/')
            // const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
            // const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]),).valueOf()
            // const differentInDays = ((date2 - date1) / (60 * 60 *24 * 1000) + 1);
            const times = payload.time.split(' - ')
            const time1 = Number(times[0].split(':')[0])
            const time2 = Number(times[1].split(':')[0])
            if (time1 === time2) {
              return '6500'
            } else {
              return (2500 * (getHours() - getHappyHours()) +  (2500 * 0.8 * getHappyHours())).toString()
            }
          }
          else if (payload.tariffName === Tariffs.FREE_SPACE){
            // const dates = (payload.duration.split(" - "))
            // const dateArray1 = dates[0].split('/')
            // const dateArray2 = dates[1].split('/')
            // const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
            // const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]),).valueOf()
            // const differentInDays = ((date2 - date1) / (60 * 60 *24 * 1000) + 1);
            return "12 000"
          }
          else {
            return "38000"
          }
        }
        const price = getPrice()

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
        .addCase(postReservationData.fulfilled, (state) => {
          state.isFormSent = true
          state.isOpen = false
        })
        .addCase(postReservationData.rejected, (_, {payload}: PayloadAction<unknown>) => {
          console.log(payload)
        })
    }
  }
)

export const selectBookingTariffs = (state: RootState) => state.booking.tariffs
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