export enum Tariffs {
  NON_FIXED_FLEXI_DESK = 'Нефиксированное место',
  FIXED_DESK = 'Фиксированное место',
  PRIVATE_OFFICE = 'Приватные воркспейсы',
  FREE_SPACE = 'Свободное пространство'
}

export enum Workspaces {
  MEETING_ROOM = 'Переговорная',
  TRAINING_CENTER = 'Тренинг-центр',
  BUSINESS_LOUNGE = 'Бизнес зал'
}

export type PersonalInfoType = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

export type TariffItem = {
  tariffName: Tariffs
  duration: string
  price?: string
  time?: string
  additional?: string
}

export type WorkspaceItem = {
  imagePath: string
  title: string
  workspaceName: Workspaces
  duration?: string
  time?: string
  price?: string
}

export type TFormStatus =  "pending" | "fulfilled" | "rejected"

export interface BookingStateType {
  page: number
  isFormSent: boolean
  formStatus: TFormStatus
  PWSpeopleCount: number
  isOpen: boolean
  tariffs: Tariffs | ''
  activeWorkspace: Workspaces | ''
  workspaces: WorkspaceItem[]
  personalInfo: PersonalInfoType
  cartTariffs: TariffItem[]
  areInputsValid: {
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    birthDate?: boolean
    phone?: boolean
  }
  reservationData: TReservationData
}

export type TReservationData = {
  mail: boolean;
  numberOrder: number;
  response: {
    lngCode: string;
    person: {
      name: string;
      lastName: string;
      email: string;
      telephone: string;
    };
    packages: {
      namePackages: string;
      price: string;
      date: string;
      persons: string;
    }[];
  };
  status: number;
}

export interface oddsI {
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

export interface getTariffPriceParams extends TariffItem {
  PWSpeopleCount: number
}