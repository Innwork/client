import {ReactNode} from "react";

export type TModal = {
  isOpen: boolean
  setIsOpen: (i: (boolean | null)) => void
  children: ReactNode
}