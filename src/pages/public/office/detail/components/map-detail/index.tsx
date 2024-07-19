import { FC } from "react"
import Locations from "@assets/icons/Location.svg";
import { TextModule } from "@src/shared/scss";
import { MapProps } from "./types/mapType"
import { PathMap } from "./model/model"
import cls from "./styles/mapDetail.module.scss";

export const MapDetail:FC<MapProps> = ({address}) => {
  return (
    <section className={cls.map}>
      <h3 className={TextModule.h3}>Локация</h3>

      <iframe
        src={PathMap[address]}
        width={"100%"}
        height={"300"}
        title={address}
      />

      <footer className={cls.map_footer}>
        <Locations/>

        <p className={TextModule.paragraph}>
          {address}
        </p>
      </footer>
    </section>
  )
}