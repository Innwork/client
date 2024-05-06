import {ILiText} from "@src/widgets/сalculator/ui/li-text/LiText";
import SVGOne from "@assets/icons/widgets/01.svg";
import SVGTwo from "@assets/icons/widgets/02.svg";
import SVGThree from "@assets/icons/widgets/03.svg";


export const LiModel: Array<ILiText> = [
    {
        svg: <SVGOne/>,
        header: "Масштаб значения не имеет.",
        subtitle: "Мы верим в силу синергии и готовы принять на наших функциональных площадках команды любого размера. Запускайте смелые и масштабные проекты вместе с нами!"
    },
    {
        svg: <SVGTwo/>,
        header: "Выгодные условия и наглядная детализация.",
        subtitle: "Мы можем не знать тонкостей вашей деятельности, но точно знаем, как создать идеальное рабочее пространство на выгодных условиях для реализации ваших проектов. "
    },
    {
        svg: <SVGThree/>,
        header: "Система лояльности.",
        subtitle: "Для нас, быть выгодным и лояльным, значит стать для вашей деятельности надежным партнером. Мы за взаимовыгодное и долгосрочное сотрудничество."
    }
]