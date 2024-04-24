
export interface AccordionItemType {
  title: { title: string, to?: string }
  content: { path: string, title: string }[]
  index: number
  activeIndex: number
  onAccordionClick: (val: number) => void
  toggleAccordion: () => void
}

export interface NavItem {
  MainLink: { title: string, to?: string, action?: (i: boolean) => void}
  DropdownLinks?: { path: string, title: string }[]
}

export enum HeaderStateEnum {
  IS_HEADER_BIG = "isHeaderBig",
  IS_HEADER_SCROLLED = "isHeaderScrolled",
  IS_ACCOUNT_BURGER_OPEN = "isAccountBurgerOpen",
  IS_ACCOUNT_BURGER_CLICKED = "isAccountBurgerClicked",
  IS_ACCORDION_OPEN = "isAccordionOpen",
  IS_NUMBER_COPIED = "isNumberCopied"
}

export type HeaderStateType = Record<string, boolean>