import {FC} from "react";
import classes from "@src/shared/ui/snackbar/ErrorSnack/ErrorSnack.module.scss";
import {combineStyle} from "@src/shared/utils";
import {TextModule} from "@src/shared/scss";
import {ErrorIconMsg} from "@src/shared/assets/icons/ui";

interface ErrorSnackProps {
  children: string
  className?: string
}

export const ErrorSnack: FC<ErrorSnackProps> = (props) => {
  const {
    children,
    className
  } = props

  return (
    <>
      {
        <div
          className={combineStyle([
            classes.snack_container, classes.error, className
          ])}>
          <div className={classes.snack_container__btn_icon}>
            <ErrorIconMsg/>
          </div>
          <p className={combineStyle([
            TextModule.paragraph__bold
          ])}>
            {children}
          </p>
        </div>
      }
    </>
  );
};
