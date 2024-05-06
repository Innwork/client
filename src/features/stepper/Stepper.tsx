import {TextModule} from "@src/shared/scss";
import StepperStyle from "@src/features/stepper/Stepper.module.scss"
import {FC, useContext} from "react";
import {combineStyle} from "@src/shared/utils";
import {useTranslation} from "react-i18next";
import RightCaretGray from "@assets/icons/RightCaretGray.svg"
import {GlobalContext} from "@src/app/provider";
import {useSelector} from "react-redux";
import {selectBookingWorkspace, selectCartTariffs} from "@src/app/redux/Booking/BookingSlice";

interface StepperProps {
  steps: number
  page: number
  setPage: (i: number) => void
}

export const Stepper: FC<StepperProps> = ({page, steps, setPage}) => {
  const {t} = useTranslation("main")
  const stepNames = ['Packages Selection', 'Additional Workspace', "Send request"]
  const {globalResize} = useContext(GlobalContext)!;
  const cartTariffs = useSelector(selectCartTariffs)
  const cartWorkspaces = useSelector(selectBookingWorkspace)
  return (
    <div className={StepperStyle.container}>
      {
        [...new Array(steps)].map((_, step) =>
          <div key={step} className={StepperStyle.stepContainer}>
            <button key={step} onClick={((cartTariffs.length + cartWorkspaces.length) === 0 && step === 2) ? () => {} : () => setPage(step + 1)}
                    className={combineStyle([StepperStyle.button, TextModule.paragraph, (step + 1) === page ? StepperStyle["active"] : ''])}>
              <span className={!globalResize.isScreenSm ? TextModule.span : TextModule.paragraph}>
                 {t(stepNames[step])}
              </span>
            </button>
            {step + 1 != new Array(steps).length &&
                <div className={StepperStyle.container__svg_continer}>
                  <RightCaretGray/>
                </div>
            }
          </div>
        )
      }
    </div>
  );
};