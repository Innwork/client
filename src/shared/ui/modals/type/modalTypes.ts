import {Dispatch, ReactNode, SetStateAction} from "react";

export type TModal = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}