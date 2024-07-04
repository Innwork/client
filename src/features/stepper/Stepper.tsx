import {TextModule} from "@src/shared/scss";
import StepperStyle from "@src/features/stepper/Stepper.module.scss"
import {FC, useContext} from "react";
import {useTranslation} from "react-i18next";
import RightCaretGray from "@assets/icons/RightCaretGray.svg"
import {GlobalContext} from "@src/app/provider";
import {selectBookingWorkspace, selectCartTariffs} from "@src/app/redux/Booking/BookingSlice";
import {useAppSelector} from "@src/app/redux/hooks/redux";
import {useClass} from "@src/shared/hooks";

interface StepperProps {
  steps: number
  page: number
  setPage: (i: number) => void
}

export const Stepper: FC<StepperProps> = ({page, steps, setPage}) => {
  const {t} = useTranslation("main")
  const stepNames = ['Выбор пакета', 'Дополнительные пространства', "Запрос на бронирование"]
  const {globalResize} = useContext(GlobalContext)!;
  const cartTariffs = useAppSelector(selectCartTariffs)
  const cartWorkspaces = useAppSelector(selectBookingWorkspace)
  return (
    <div className={StepperStyle.container}>
      {
        [...new Array(steps)].map((_, step) =>
          <div key={step} className={StepperStyle.stepContainer}>
            <button key={step} onClick={((cartTariffs.length + cartWorkspaces.length) === 0 && step === 2) ? () => {} : () => setPage(step + 1)}
                    className={useClass([StepperStyle.button, TextModule.paragraph, (step + 1) === page ? StepperStyle["active"] : ''])}>
              <span className={!globalResize.isScreenSm ? TextModule.span__small : TextModule.paragraph}>
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