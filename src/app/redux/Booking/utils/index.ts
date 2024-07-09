import {getTariffPriceParams, Tariffs, WorkspaceItem, Workspaces} from "@src/app/redux/Booking/BookingTypes";
import {odds} from "@src/app/redux/Booking/models";

export const calculateHappyHours = (time1: number, time2: number) => {
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

const getTariffHours = (time: string): number => {
  if (time) {
    const times = time.split(' - ')
    const time1 = Number(times[0].split(':')[0])
    const time2 = Number(times[1].split(':')[0])
    if (time1 === time2) return 24
    else if (time2 > time1) return time2 - time1
    else if (time1 > time2) return 24 - time1 + time2
  }
}

const getTariffHappyHours = (time: string): number => {
  if (time) {
    const times = time.split(' - ')
    const time1 = Number(times[0].split(':')[0])
    const time2 = Number(times[1].split(':')[0])
    return calculateHappyHours(time1, time2)
  }
  return 0
}

export const getTariffPrice = ({tariffName, duration, time, PWSpeopleCount}: getTariffPriceParams) => {
  if (tariffName === Tariffs.FIXED_DESK) {
    const dates = duration.split(" - ")
    const dateArray1 = dates[0].split('/')
    const dateArray2 = dates[1].split('/')
    const date1 = new Date(Number(dateArray1[0]), Number(dateArray1[1]), Number(dateArray1[2]))
    const date2 = new Date(Number(dateArray2[0]), Number(dateArray2[1]), Number(dateArray2[2]))
    const months = date2.getMonth() - date1.getMonth() + (12 * (date2.getFullYear() - date1.getFullYear()))
    if (months === 1) return '69000'
    else if (months === 3) return '198000'
    else if (months === 6) return '379000'
    else if (months === 12) return '663000'
  } else if (tariffName === Tariffs.PRIVATE_OFFICE) {
    const dates = duration.split(" - ")
    const dateArray1 = dates[0].split('/')
    const dateArray2 = dates[1].split('/')
    const date1 = new Date(Number(dateArray1[0]), Number(dateArray1[1]), Number(dateArray1[2]))
    const date2 = new Date(Number(dateArray2[0]), Number(dateArray2[1]), Number(dateArray2[2]))
    const months = (date2.getMonth() - date1.getMonth()) === 0 ? 12 : (date2.getMonth() - date1.getMonth())
    return (99990 * months * odds.privateOffice[months] * PWSpeopleCount).toString()
  } else if (tariffName === Tariffs.NON_FIXED_FLEXI_DESK) {
    // const dates = (payload.duration.split(" - "))
    // const dateArray1 = dates[0].split('/')
    // const dateArray2 = dates[1].split('/')
    // const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
    // const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]),).valueOf()
    // const differentInDays = ((date2 - date1) / (60 * 60 *24 * 1000) + 1);
    const times = time.split(' - ')
    const time1 = Number(times[0].split(':')[0])
    const time2 = Number(times[1].split(':')[0])
    if (time1 === time2) {
      return '6500'
    } else {
      return (2490 * (getTariffHours(time) - getTariffHappyHours(time)) + (2490 * 0.8 * getTariffHappyHours(time))).toString()
    }
  } else if (tariffName === Tariffs.FREE_SPACE) {
    // const dates = (payload.duration.split(" - "))
    // const dateArray1 = dates[0].split('/')
    // const dateArray2 = dates[1].split('/')
    // const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
    // const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]),).valueOf()
    // const differentInDays = ((date2 - date1) / (60 * 60 *24 * 1000) + 1);
    return "12 000"
  }
}


const getWorkspaceHappyHours = (duration?: string, time?: string): number => {
  if (duration && !time) {
    const dates = (duration.split(" - "))
    const dateArray1 = dates[0].split('/')
    const dateArray2 = dates[1].split('/')
    const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
    const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]) + 1,).valueOf()
    return ((date2 - date1) / (60 * 24 * 60 * 1000)) * 12;
  }
  if (!duration && time) {
    const times = time.split(' - ')
    const time1 = Number(times[0].split(':')[0])
    const time2 = Number(times[1].split(':')[0])
    return calculateHappyHours(time1, time2)
  }
  return 0
}

const getWorkspaceCombinedHappyHours = (duration: string, time: string): number => {
  const dates = duration.split(" - ")
  const dateArray1 = dates[0].split('/')
  const dateArray2 = dates[1].split('/')
  const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
  const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]) + 1,).valueOf()
  const days = ((date2 - date1) / (60 * 24 * 60 * 1000))

  const times = time.split(' - ')
  const time1 = Number(times[0].split(':')[0])
  const time2 = Number(times[1].split(':')[0])
  return calculateHappyHours(time1, time2) * days
}

const getWorkspaceHours = (duration: string, time: string): number => {
  if (duration && !time) {
    const dates = (duration.split(" - "))
    const dateArray1 = dates[0].split('/')
    const dateArray2 = dates[1].split('/')
    const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
    const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]) + 1,).valueOf()
    return (date2 - date1) / (60 * 60 * 1000);
  } else if (!duration && time) {
    const times = time.split(' - ')
    const time1 = Number(times[0].split(':')[0])
    const time2 = Number(times[1].split(':')[0])
    if (time1 === time2) return 24
    else if (time2 > time1) return time2 - time1
    else if (time1 > time2) return 24 - time1 + time2
  }

  return 0
}

const getWorkspaceCombinedHours = (duration: string, time: string): number => {
  const dates = duration.split(" - ")
  const dateArray1 = dates[0].split('/')
  const dateArray2 = dates[1].split('/')
  const date1 = new Date(Number(dateArray1[2]), Number(dateArray1[1]), Number(dateArray1[0]),).valueOf()
  const date2 = new Date(Number(dateArray2[2]), Number(dateArray2[1]), Number(dateArray2[0]) + 1,).valueOf()
  const days = ((date2 - date1) / (60 * 24 * 60 * 1000))

  const times = time.split(' - ')
  const time1 = Number(times[0].split(':')[0])
  const time2 = Number(times[1].split(':')[0])
  if (time1 === time2) return 24 * days
  else if (time2 > time1) return (time2 - time1) * days
  else if (time1 > time2) return (24 - time1 + time2) * days

  return 0
}

export const getWorkspaces = (workspaces: WorkspaceItem[], payload: WorkspaceItem) => {
  const Workspace = workspaces.find(item => (item.workspaceName === payload.workspaceName))
  if (!Workspace) {
    if (payload.workspaceName === Workspaces.TRAINING_CENTER) {
      const price = (7000 * (getWorkspaceHours(payload.duration, payload.time) - getWorkspaceHappyHours(payload.duration, payload.time)) + (7000 * 0.8 * getWorkspaceHappyHours(payload.duration, payload.time))).toString()
      // const price = (7000 * (getWorkspaceHours(payload.duration, payload.time))).toString()
      return [{...payload, price}, ...workspaces]
    } else if (payload.workspaceName === Workspaces.MEETING_ROOM) {
      const price = (5500 * (getWorkspaceHours(payload.duration, payload.time) - getWorkspaceHappyHours(payload.duration, payload.time)) + (5500 * 0.8 * getWorkspaceHappyHours(payload.duration, payload.time))).toString()
      return [{...payload, price}, ...workspaces]
    } else if (payload.workspaceName === Workspaces.BUSINESS_LOUNGE) {
      const price = (5500 * (getWorkspaceHours(payload.duration, payload.time) - getWorkspaceHappyHours(payload.duration, payload.time)) + (5500 * 0.8 * getWorkspaceHappyHours(payload.duration, payload.time))).toString()
      return [{...payload, price}, ...workspaces]
    }
  } else {
    const workspaceToPull = {...Workspace, ...payload}
    if (payload.workspaceName === Workspaces.TRAINING_CENTER) {
      const editedWorkspaces = workspaces.filter(item => (item.workspaceName != payload.workspaceName))
      const price = (
        (workspaceToPull.duration && workspaceToPull.time)
          ? 7000 * (getWorkspaceCombinedHours(workspaceToPull.duration, workspaceToPull.time) - getWorkspaceCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time)) + (7000 * 0.8 * getWorkspaceCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time))
          : 7000 * (getWorkspaceHours(payload.duration, payload.time) - getWorkspaceHappyHours(payload.duration, payload.time)) + (7000 * 0.8 * getWorkspaceHappyHours(payload.duration, payload.time))
        // ? 7000 * (getWorkspaceCombinedHours(workspaceToPull.duration, workspaceToPull.time))
        // : 7000 * getWorkspaceHours(payload.duration, payload.time)
      ).toString()
      return [{...workspaceToPull, price}, ...editedWorkspaces]
    } else if (payload.workspaceName === Workspaces.MEETING_ROOM) {
      const editedWorkspaces = workspaces.filter(item => (item.workspaceName != payload.workspaceName))
      const price = (
        (workspaceToPull.duration && workspaceToPull.time)
          ? 5500 * (getWorkspaceCombinedHours(workspaceToPull.duration, workspaceToPull.time) - getWorkspaceCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time)) + (5500 * 0.8 * getWorkspaceCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time))
          : 5500 * (getWorkspaceHours(payload.duration, payload.time) - getWorkspaceHappyHours(payload.duration, payload.time)) + (5500 * 0.8 * getWorkspaceHappyHours(payload.duration, payload.time))
        // ? 5500 * getWorkspaceCombinedHours(workspaceToPull.duration, workspaceToPull.time)
        // : 5500 * getWorkspaceHours(payload.duration, payload.time)
      ).toString()
      return [{...workspaceToPull, price}, ...editedWorkspaces]
    } else if (payload.workspaceName === Workspaces.BUSINESS_LOUNGE) {
      const editedWorkspaces = workspaces.filter(item => (item.workspaceName != payload.workspaceName))
      const price = (
        (workspaceToPull.duration && workspaceToPull.time)
          ? 5500 * (getWorkspaceCombinedHours(workspaceToPull.duration, workspaceToPull.time) - getWorkspaceCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time)) + (5500 * 0.8 * getWorkspaceCombinedHappyHours(workspaceToPull.duration, workspaceToPull.time))
          : 5500 * (getWorkspaceHours(payload.duration, payload.time) - getWorkspaceHappyHours(payload.duration, payload.time)) + (5500 * 0.8 * getWorkspaceHappyHours(payload.duration, payload.time))
        // ? 10000 * getWorkspaceCombinedHours(workspaceToPull.duration, workspaceToPull.time)
        // : 10000 * getWorkspaceHours(payload.duration, payload.time)
      ).toString()
      return [{...workspaceToPull, price}, ...editedWorkspaces]
    }
  }
}