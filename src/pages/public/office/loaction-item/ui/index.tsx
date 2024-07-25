import { useParams } from "react-router-dom";
import { ContainerModule } from "@src/shared/scss";
import { LocationItemModel } from "../model/loactionItem";
import { HeaderLocItem } from "../components/header-loc-item";
import { VirtulaTure } from "../components/virtual-toure";

export const LocationItem = () => {
  const data = LocationItemModel[useParams().name]

  return (
    <section className={ContainerModule.wrapper}>
      <HeaderLocItem name={data.name} location={data.location}/>
      <VirtulaTure/>
    </section>
  );
};