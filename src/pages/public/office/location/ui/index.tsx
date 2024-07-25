import { ContainerModule, TextModule } from "@src/shared/scss";
import { LocCard } from "../components/loc-card";
import { LocationModel } from "../model/LocationModel";
import cls from "../style/location.module.scss";

export const Locations = () => {
  return (
    <section className={ContainerModule.wrapper}>
      <header className={cls.header}>
        <h3 className={TextModule.h3}>Локации</h3>
      </header>

      <div className={cls.section_card}>
        {LocationModel.map((el => 
          <LocCard
            key={el.path}
            img={el.img}
            name={el.name}
            location={el.location}
            desc={el.desc}
            area={el.area}
            jobs={el.jobs}
            floor={el.floor}
            path={el.path}
        />))}
      </div>
    </section>
  )
}
