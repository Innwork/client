import {useTranslation} from "react-i18next";
import cls from "@src/pages/not-found/styles/NotFound.module.scss"
import {useClass} from "@src/shared/hooks";
import {TextModule} from "@src/shared/scss";
import {BackButton} from "@src/shared/ui/btn/back-button/BackButton";


export const NotFound = () => {
  const { t } = useTranslation('error');

  return (
    <section className={cls.not_found}>
      <div className={cls.not_found__content}>
        <h6 className={useClass([
          TextModule.h1, cls.not_found__content_404
        ])}>
          404
        </h6>

        <h2 className={TextModule.h3}>
          {t("Страница не найдена")}
        </h2>

        <p className={
          useClass([
            TextModule.paragraph_light, cls.not_found__content_text
          ])
        }>
          {t("Эта страница больше не существует или никогда не существовала.")}
        </p>
      </div>

      <div className={cls.not_found_links}>
        <BackButton>
          {t("Вернуться обратно")}
        </BackButton>
      </div>
    </section>
  );
};