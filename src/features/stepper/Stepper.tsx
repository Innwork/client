import {TextModule} from "@src/shared/scss";
import StepperStyle from "@src/features/stepper/Stepper.module.scss"
import {FC, useContext} from "react";
import {combineStyle} from "@src/shared/utils";
import {useTranslation} from "react-i18next";
import {RightCaretGray} from "@src/shared/assets/icons"
import {GlobalContext} from "@src/app/provider";

interface StepperProps {
  steps: number
  page: number
  setPage: (i: number) => void
}

export const Stepper: FC<StepperProps> = ({page, steps, setPage}) => {
  const {t} = useTranslation("main")
  const stepNames = ['Additional Workspace', 'Packages Selection', "Send request"]
  const {globalResize} = useContext(GlobalContext)!;
  return (
    <div className={StepperStyle.container}>
      {
        [...new Array(steps)].map((_, step) =>
          <div key={step} className={StepperStyle.stepContainer}>
            <button key={step} onClick={() => setPage(step + 1)}
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