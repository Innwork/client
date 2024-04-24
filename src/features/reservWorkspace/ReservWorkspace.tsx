import {FC} from "react";
import {useTranslation} from "react-i18next";
import {TextModule} from "@src/shared/scss";
import classes from "@src/features/reservWorkspace/ReserveWorkspace.module.scss"
import {combineStyle} from "@src/shared/utils";
import {ClockGraySvg, GrayDataSVG, TrashBinSvg} from "@src/shared/assets/icons";
import {Workspaces} from "@src/app/redux/Booking/BookingTypes";
import {useActions} from "@src/app/redux/hooks/useActions";

export interface IReserveWorkspace {
  price?: string
  src: string,
  header: Workspaces,
  title: string,
  duration?: string
  time?: string
}

export const ReserveWorkspace: FC<IReserveWorkspace> = (props) => {
  const {
    src, header, title, duration, time, price
  } = props;

  const priceWithSpace = price?.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')
  const {removeWorkspace} = useActions()
  const {t} = useTranslation("main");

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={src} alt={header}/>
      </div>

      <div className={classes.text_content}>
        <div>
          <h4 className={TextModule.paragraph__bold}>
            {t(header)}
          </h4>

          <span className={combineStyle([
            TextModule.h3, classes.text_content__span
          ])}>
            {priceWithSpace} AMD
          </span>
        </div>

        <div className={combineStyle([classes.dates, TextModule.paragraph])}>
          {duration &&
            <>
              <div className={classes.imgContainer}>
                <GrayDataSVG stroke='#9a9a9a'/>
              </div>
              <span>
                {duration.split(' - ')[0] === duration.split(' - ')[1] ?
                  duration.split(' - ')[0]
                  :
                  duration
                }
              </span>
            </>
          }
          {time &&
            <>
              <div className={classes.imgContainer}>
                <ClockGraySvg/>
              </div>
              <span>
                {time}
              </span>
            </>
          }
        </div>
      </div>
        <div className={classes.deleteButton} onClick={() => removeWorkspace({title: title, duration, imagePath: src, workspaceName: header, time: time})}>
          <div className={classes.deleteImageContainer}>
            <TrashBinSvg/>
          </div>
        </div>
    </div>
  );
};
