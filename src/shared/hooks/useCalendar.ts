import {useCallback, useState} from 'react';

export interface Column {
  classes: 'inNextMonth' | 'inPrevMonth' | 'default';
  date: string;
  value: number;
}

interface CalendarRows {
  [id: number]: Column[]
}


const daysShortArr = [
  'Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'
];

export const useCalendar = (daysShort = daysShortArr) => {
  const today = new Date();
  const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  const [selectedMonth, setSelectedMonth] = useState(today);
  const [startDay, setStartDay] = useState("0")
  const [endDay, setEndDay] = useState("0")
  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  const selectedMonthLastDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0);
  const prevMonthLastDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 0);
  const daysInMonth = selectedMonthLastDate.getDate();
  const firstDayInMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1).getDay();
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
  let prevMonthStartingPoint = prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;
  const rows = 6;
  const cols = 7;
  const calendarRows: CalendarRows = {};

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (!calendarRows[i]) {
        calendarRows[i] = [];
      }

      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [...calendarRows[i], {
            classes: 'inPrevMonth',
            date: `${prevMonthStartingPoint}-${selectedMonth.getMonth() === 0 ? 12 : selectedMonth.getMonth()}-${selectedMonth.getMonth() === 0 ? selectedMonth.getFullYear() - 1 : selectedMonth.getFullYear()}`,
            value: prevMonthStartingPoint
          }];
          prevMonthStartingPoint++;
        } else {
          calendarRows[i] = [...calendarRows[i], {
            classes: 'default',
            date: `${currentMonthCounter}-${selectedMonth.getMonth() + 1}-${selectedMonth.getFullYear()}`,
            value: currentMonthCounter
          }];
          currentMonthCounter++;
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [...calendarRows[i], {
          classes: 'default',
          date: `${currentMonthCounter}-${selectedMonth.getMonth() + 1}-${selectedMonth.getFullYear()}`,
          value: currentMonthCounter
        }];
        currentMonthCounter++;
      } else {
        calendarRows[i] = [...calendarRows[i], {
          classes: 'inNextMonth',
          date: `${nextMonthCounter}-${selectedMonth.getMonth() + 2 === 13 ? 1 : selectedMonth.getMonth() + 2}-${selectedMonth.getMonth() + 2 === 13 ? selectedMonth.getFullYear() + 1 : selectedMonth.getFullYear()}`,
          value: nextMonthCounter
        }];
        nextMonthCounter++;
      }
    }
  }

  const getMonth = (month: number) => {
    setSelectedMonth(prevValue => new Date(prevValue.getFullYear(), month, 1));
  }

  const getYear = (year: number) => {
    setSelectedMonth(prevValue => new Date(year, prevValue.getMonth(), 1));
  }


  const getEndDay = useCallback((days: string) => {
    if (days) {
      const daysArray = days.split("-")
      const startDayArray = startDay.split('-')
      if (daysArray[1] === 'm') {
        const endDate = new Date(Number(startDayArray[2]), Number(startDayArray[1]) + Number(daysArray[0]), Number(startDayArray[0]))
        setEndDay(`${endDate.getDate()}-${endDate.getMonth()}-${endDate.getFullYear()}`)
      }else {
        const endDate = new Date(Number(startDayArray[2]), Number(startDayArray[1]), Number(startDayArray[0]) + Number(daysArray[0]))
        setEndDay(`${endDate.getDate()}-${endDate.getMonth()}-${endDate.getFullYear()}`)
      }
    }
    }, [startDay])

  return {
    startDay,
    setStartDay,
    endDay,
    getEndDay,
    daysShort,
    todayFormatted,
    calendarRows,
    selectedMonth,
    getMonth,
    getYear,
    setEndDay
  }
}