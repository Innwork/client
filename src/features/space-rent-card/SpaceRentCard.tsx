import classes from "@src/features/space-rent-card/SpaceRentCard.module.scss"
import {FC, SVGProps} from "react";
import {TextModule} from "@src/shared/scss";
import {useClass} from "@src/shared/hooks";

interface SpaceRentCardProps {
  title: string
  content: string
  imageLogo: FC<SVGProps<SVGElement>>
}

export const SpaceRentCard:FC<SpaceRentCardProps> = (props) => {
  const {title, content} = props
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        {/*<props.imageLogo/>*/}
        картинка
      </div>
      <div className={TextModule.h6__medium}>
        {title}
      </div>
      <div className={useClass([TextModule.paragraph, classes['content']])}>
        {content}
      </div>
    </div>
  );
};