import {FC} from "react";
import {IDirectionButtonType, TClassesDirectionButtonType} from "@src/shared/ui/btn/direction/type/DirectionButton";
import classes from "@src/shared/ui/btn/direction/styles/DirectionButton.module.scss";
import {combineStyle} from "@src/shared/utils";
import {TextModule} from "@src/shared/scss";

export const DirectionButton: FC<IDirectionButtonType> = (props) => {

  const {
      variant = "back",
      children,
      className,
      disabled =false,
      onClick
  } = props

  const classesVariant: TClassesDirectionButtonType = {
      back: classes["back"],
      next: classes["next"]
  }

  return (
    <button onClick={onClick ? () => onClick() : undefined}
            className={combineStyle([
                classes.direction_button, TextModule.paragraph, classesVariant[variant], className
            ])}  disabled={disabled}>
        {children}
    </button>
  );
};