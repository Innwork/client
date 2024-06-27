import React from 'react';
import cls from "@src/pages/terms/Terms.module.scss"
import {Sidebar} from "@src/widgets/sidebar";
import {useClass} from "@src/shared/hooks";
import {TextModule, ContainerModule} from "@src/shared/scss";
import {RulesSection} from "@src/pages/rules/models";
import {useTranslation} from "react-i18next";

export const Rules = () => {
  const {t} = useTranslation("rules")

  return (
    <div className={cls.termsContainer}>
      <Sidebar sections={RulesSection} link={"RulesLink"}/>
      <div className={useClass([ContainerModule.wrapper, cls.contentWrapper, TextModule.paragraph])}>
        <h1 className={useClass([cls.mainHeader, TextModule.h5])}>{t("Правила пользования коворкингом “INNWORK”")}</h1>
        <p className={useClass([cls.additional, TextModule.paragraph__bold])}>
          {t("Настоящие правила обязательны к исполнению субъектами малого и среднего бизнеса, а также физическими лицами, не являющиеся стороной Соглашения о предоставлении рабочего места, помещающие Коворкинг и иными лицами на территории Коворкинга “INNWORK”.")}
          <br/>
          {t("Нарушение (несоблюдение) настоящих правил является основание для временного или постоянного отказа посетителю в оказании услуг и доступе в помещение.")}
        </p>

        <h2 id="1" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>{t("1.Порядок посещения Коворкинга “INNWORK”")}</h2>
        <p className={cls.subsection}>
          {t("1.1. Посещение Коворкинга осуществляется после подписания договора.  Посетитель обязан произвести оплату в размере выбранного Тарифа на сайте.")}
          <br/>
          {t("1.2. На территорию коворкинга “INNWORK” не допускаются лица в состоянии алкогольного или наркотического опьянения, а также агрессивно ведущие.")}
          <br/>
          {t("1.3. При Аренде переговорной, бизнес-зала или тренинг-центра на месяц, в день можно находиться в Коворкинге не больше четырех часов.")}
          <br/>
          {t("1.4. Режим работы Коворкинга устанавливается в соответствии с производственным календарем на текущий год, разработанным на основании статей 117 Трудового кодекса Республики Армения.")}
        </p>

        <h2 id="2" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>{t("2. Порядок приема и возврата рабочего места в Коворкинге.")}</h2>
        <p className={cls.subsection}>
          {t("2.1. До начала использования рабочего места посетитель Коворкинга проводит его визуальный осмотр.")}
          <br/>
          {t("2.2. При завершении работы посетитель обязан привести в надлежащий вид рабочее место, удалить всю принадлежащую ему электронную информацию с компьютера и иного оборудования Исполнителя, в противном случае Исполнитель не несёт ответственность за конфиденциальность, дальнейшее использование, распространение или уничтожение такой информации")}
          <br/>
          {t("2.3. При истечении срока пользования рабочим местом посетитель обязан в последний рабочий день пребывания в Коворкинге передать рабочее место Исполнителю в надлежащем состоянии․")}
        </p>

        <h2 id="3" className={useClass([cls.sectionHeader, TextModule.paragraph__bold])}>{t("3.Правила нахождения в Коворкинге")}</h2>
        <p className={cls.subsection}>
          {t("3.1. Посетитель Коворкинга при пользовании рабочим местом обязан руководствоваться настоящими Правилами и соблюдать нормы действующего законодательства, а также использовать рабочее место и предоставленное оборудование по назначению.")}
          <br/>
          {t("3.2. Посетитель обязан поддерживать чистоту и порядок на рабочих местах и в местах общественного пользования. За рабочим местом не допускается прием кофе, чая и других неалкогольных напитков, прием пищи. А также обязаны не оставлять немытую посуду, остатки еды и напитков в общих зонах.")}
          <br/>
          {t("3.3. Посетитель обязан бережно относиться ко всему оборудованию, офисной технике, мебели, материалам и энергетическим ресурсам Коворкинга. В случае порчи оборудования или офисной техники, обязаны возместить ее стоимость или причиненный ущерб")}
          <br/>
          {t("3.4. Посетитель Коворкинга вправе использовать собственное имущество по предварительному согласованию с Исполнителем.")}
          <br/>
          {t("3.5. Запрещается находиться в Коворкинге в состоянии алкогольного, наркотического или токсического опьянения.")}
          <br/>
          {t("3.6. Запрещается курить (в том числе электронные сигареты, вейпы и т.д.) в помещениях. Для этого есть специально отведенное место")}
          <br/>
          {t("3.7. Запрещается переставлять инвентарь и оборудование в Коворкинге без предварительного согласования с Исполнителем.")}
          <br/>
          {t("3.8. Запрещается входить в Коворкинг с животными, за исключением пользователей - лиц с ослабленным зрением и лиц, утративших зрения, в сопровождении собаки-поводыря.")}
          <br/>
          {t("3.9. Находясь в Коворкинге при проведении переговоров (в том числе с использованием мобильного телефона) рекомендуется не разговаривать слишком громко, чтобы не мешать работе других лиц, соблюдать общепринятые правила приличия.")}
          <br/>
          {t("3.10. Находясь в Коворкинге телефоны и прочие личные устройства коммуникации и связи должны быть приведены в бесшумный или виброрежим. Просмотр и прослушивание мультимедийных файлов разрешено производить в наушниках.")}
          <br/>
          {t("3.11. Запрещено находиться без защитной маски, если переносится болезнь ОРВИ, грипп и другие заболевания, передающиеся воздушно-капельным путем, подвергая опасности инфицирования других Посетителей.")}
          <br/>
        </p>
      </div>
    </div>
  );
};