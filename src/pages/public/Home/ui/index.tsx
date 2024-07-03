import {
  AdditionalWorkspace,
  Plane,
  BannerHome,
  ChooseLocation
} from "@src/pages/public/Home/components";
import {AboutUs} from "@src/widgets/about-us";
import {ContainerModule} from "@src/shared/scss";
import {Calculator} from "@src/widgets/сalculator";

export const Home = () => {
  return (
    <>
      <BannerHome/>

      <section className={ContainerModule.flex_pages}>
        <AdditionalWorkspace/> <Plane/> <Calculator/> <ChooseLocation/> <AboutUs/>
        {/*<Reviews/>*/}
      </section>
    </>
  );
};