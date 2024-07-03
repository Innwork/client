import {FC, ReactNode} from "react"
import { TextModule } from "@src/shared/scss"
import classes from "@src/shared/components/footer/style/FooterNav.module.scss";

interface IFooterNav{
    navName: string
    children: Array<ReactNode>
}

export const FooterNav:FC<IFooterNav> = ({navName, children}) => {
  return (
    <div className={classes.footer_item}>
        <h4 className={TextModule.h5_white}>{navName}</h4>

        <nav className={classes.footer_item__nav}>
            { children.map((el, index) => <div key={index}>{el}</div>) }
        </nav>
    </div>
  )
}
