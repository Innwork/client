
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

export interface BookingStateType {
  page: number
  isFormSent: boolean
  PWSpeopleCount: number
  isOpen: boolean
  tariffs: Tariffs | ''
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
}

