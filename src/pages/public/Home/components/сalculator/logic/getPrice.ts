import {Tariffs, Workspaces} from "@src/app/redux/Booking/BookingTypes";

type TGetPrice = {
  time?: string
  // '24:30 - 24:30'
  workspaceName: Workspaces | Tariffs
  duration?: string
  // "28/10/2024 - 28/10/2024"
}

const getHappyHours = (time?: string): number => {
  if (time) {
    const times = time.split(' - ')
    const time1 = Number(times[0].split(':')[0])
    const time2 = Number(times[1].split(':')[0])
    let allNumbers = [];
    const happyHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 21, 22, 23]

    if (time1 < time2) {
      for (let i = time1; i < time2; i++){
        allNumbers.push(i);
      }
      return happyHours.filter(x => allNumbers.includes(x)).length
    }
    else if (time1 > time2) {
      for (let i = time1; i <= 23; i++){
        allNumbers.push(i);
      }
      for (let i = 0; i < time2; i++){
        allNumbers.push(i);
      }
      return happyHours.filter(x => allNumbers.includes(x)).length
    }
    else {
      return 12
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
  let allNumbers = [];
  const happyHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 21, 22, 23]

  if (time1 < time2) {
    for (let i = time1; i < time2; i++){
      allNumbers.push(i);
    }
    return happyHours.filter(x => allNumbers.includes(x)).length * days
  }
  else if (time1 > time2) {
    for (let i = time1; i <= 23; i++){
      allNumbers.push(i);
    }
    for (let i = 0; i < time2; i++){
      allNumbers.push(i);
    }
    return happyHours.filter(x => allNumbers.includes(x)).length * days
  }
  else {
    return 12 * days
  }
}

const getHours = (time?: string): number => {
  if (time) {
    const times = time.split(' - ')
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

export const getPrice = ({time, workspaceName, duration}: TGetPrice) => {
  if (workspaceName === Workspaces.TRAINING_CENTER) {
    return (
      // (duration && time)
      //   ? 7000 * (getCombinedHours(duration, time) - getCombinedHappyHours(duration, time)) + (9500 * 0.8 * getCombinedHappyHours(duration, time))
      //   : 7000 * (getHours(duration, time) - getHappyHours(duration, time)) + (9500 * 0.8 * getHappyHours(duration, time))
      'Этот пакет пока недоступен'
    ).toString()

  } else if (workspaceName === Workspaces.MEETING_ROOM) {
    return (
      (duration && time)
        ? 5500 * (getCombinedHours(duration, time) - getCombinedHappyHours(duration, time)) +  (5500 * 0.8 * getCombinedHappyHours(duration, time))
        : 5500 * (getHours(time) - getHappyHours(time)) +  (5500 * 0.8 * getHappyHours(time))
    ).toString()

  } else if (workspaceName === Workspaces.BUSINESS_LOUNGE) {
    return (
      (duration && time)
        ? 5500 * (getCombinedHours(duration, time) - getCombinedHappyHours(duration, time)) +  (5500 * 0.8 * getCombinedHappyHours(duration, time))
        : 5500 * (getHours(time) - getHappyHours(time)) +  (5500 * 0.8 * getHappyHours(time))
    ).toString()
  } else if (workspaceName === Tariffs.NON_FIXED_FLEXI_DESK) {
    if (getHours(time) === 24) {
      return '6500'
    } else {
      return (2490 * (getHours(time) - getHappyHours(time)) +  (2490 * 0.8 * getHappyHours(time))).toString()
    }
  }
  return 0
}