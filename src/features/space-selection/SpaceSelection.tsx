import {SpacesGroup} from "@src/widgets/reviews/types/types";
import {FC} from "react";
import classes from '@src/features/space-selection/SpaceSelection.module.scss'
import {MainBtn} from "@src/shared/ui/btn/main-btn/MainBtn";
import {useClass} from "@src/shared/hooks";
import {TextModule} from "@src/shared/scss";

interface SpaceSelectionProps {
  activeSpace: SpacesGroup,
  setActiveSpace: (i: SpacesGroup) => void,
  spaces: SpacesGroup[]
}

export const SpaceSelection: FC<SpaceSelectionProps> = (props) => {
  const {
    activeSpace,
    setActiveSpace,
    spaces
  } = props

  return (
    <div className={classes.container}>
      {spaces.map((space) =>
        <MainBtn
          state={'black'} onClick={() => setActiveSpace(space)} key={space}
          className={useClass([classes.button, activeSpace === space ? "" : classes['notActive'], TextModule.paragraph])}
        >
          {space}
        </MainBtn>
      )}
    </div>
  );
};