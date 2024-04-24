import classes from "@src/widgets/reservWorkspaces/ReservWorkspaces.module.scss"
import {ReservAdditional} from "@src/widgets/reservWorkspaces/widgets/reserv-additional/ReservAdditional";

export const ReservWorkspaces = () => {
  return (
    <>
      <div className={classes.workspaces}>
          <ReservAdditional/>
      </div>
    </>
  );
};