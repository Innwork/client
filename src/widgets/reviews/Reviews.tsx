import {FC, useContext, useState} from "react";
import {ContainerModule, TextModule} from "@src/shared/scss";
import classes from "@src/widgets/reviews/reviews.module.scss";
import {SpaceRentCard} from "@src/features/space-rent-card";
import {SpaceSelection} from "@src/features/space-selection";
import {spaces} from "@src/widgets/reviews/models/models";
import {SpacesGroup} from "@src/widgets/reviews/types/types";
import {Slider} from "@src/features/slider";
import {GlobalContext} from "@src/app/provider";

export const Reviews: FC = () => {
  const [activeSpace, setActiveSpace] = useState(SpacesGroup.DIGITAL_SERVICES)
  const {globalResize} = useContext(GlobalContext)!;

  return (
    <section className={ContainerModule.wrapper}>
      <div className={classes.head_container
      }>
        <h4 className={TextModule.h3__medium}>Как бизнес использует наши пространства?</h4>
      </div>
      <SpaceSelection activeSpace={activeSpace} setActiveSpace={setActiveSpace} spaces={Object.keys(spaces) as SpacesGroup[]}/>
      <Slider slidesPerView={2} sizeBoolean={globalResize.isScreenLg}>
        {spaces[activeSpace].map((el) =>
          <SpaceRentCard title={el.title} content={el.content} imageLogo={el.img} key={el.title}/>
        )}
      </Slider>
    </section>
  );
};
