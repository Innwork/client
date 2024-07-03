import {FC, ReactNode} from "react";
import classes from "@src/shared/ui/snackbar/ErrorSnack/ErrorSnack.module.scss";
import {TextModule} from "@src/shared/scss";
import ErrorIconMsg from "@assets/icons/ui/errorIcon.svg";
import SuccessIconMsg from "@assets/icons/ui/successmsg.svg";
import {Checkbox} from "@src/shared/ui/input";
import {useClass} from "@src/shared/hooks";

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
          className={useClass([
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
            <p className={useClass([
              TextModule.paragraph__medium
            ])}>
              {children}
            </p>
          </div>
          {checkBox && <Checkbox checkValue={checkValue} setCheckValue={setCheckValue} variety={"green"}/>}
        </div>
      }
    </>
  );
};
