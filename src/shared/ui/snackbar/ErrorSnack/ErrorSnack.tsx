import {FC, ReactNode} from "react";
import classes from "@src/shared/ui/snackbar/ErrorSnack/ErrorSnack.module.scss";
import {combineStyle} from "@src/shared/utils";
import {TextModule} from "@src/shared/scss";
import {ErrorIconMsg} from "@src/shared/assets/icons/ui";
import {SuccessIconMsg} from "@src/shared/assets/icons/ui";

interface ErrorSnackProps {
  children: string | ReactNode
  className?: string
  variety?: 'error' | 'good'
  checkBox?: boolean
  checkValue?: boolean
  setCheckValue?: (i: boolean) => void
}

export const ErrorSnack: FC<ErrorSnackProps> = (props) => {
  const {
    children,
    className,
    variety = 'error',
    checkBox = false,
    checkValue,
    setCheckValue
  } = props

  const varietyStyle = {
    'error': classes["error"],
    'good': classes["good"]
  }

  return (
    <>
      {
        <div
          className={combineStyle([
            classes.snack_container, varietyStyle[variety], className
          ])}>
          <div className={classes.snack_content}>
            <div className={classes.snack_container__btn_icon}>
              {!checkBox && variety === "good" ?
                <SuccessIconMsg/>
                :
                !checkBox && variety === "error" && <ErrorIconMsg/>
              }
            </div>
            <p className={combineStyle([
              TextModule.paragraph__medium
            ])}>
              {children}
            </p>
          </div>
          {checkBox && <input type={'checkBox'} checked={checkValue} onChange={() => setCheckValue(!checkValue)} className={classes.check}/>}
        </div>
      }
    </>
  );
};
