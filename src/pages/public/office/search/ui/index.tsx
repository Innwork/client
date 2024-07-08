import { ContainerModule } from "@src/shared/scss";
import { Filed } from "@src/pages/public/office/search/components/field/ui";
import cls from "@src/pages/public/office/search/styles/search.module.scss";

import bannerSearch from "@assets/img/search/25b6cba2-07a9-44da-9201-c0c775b4a372.jpg";
import { CardOffice } from "@src/pages/public/office/search/components/card-office/ui";

export const Search = () => {
  const cards = Array.from({ length: 4 }, (_, index) => (
    <CardOffice key={index} />
  ));

  return (
    <>
      <div className={cls.search_space_banner}>
        <img className={cls.search_space_banner__img} src={bannerSearch} alt="bannerSearch" />
        <div className={cls.search_space_banner__bg}></div>
        <Filed />
      </div>

      <section className={ContainerModule.wrapper}>
        <div className={cls.search_space_cards}>
          {cards}
        </div>
      </section>
    </>
  );
};
