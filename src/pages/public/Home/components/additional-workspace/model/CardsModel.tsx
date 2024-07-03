import {ISmallCards} from "@src/shared/ui/cards";
import Meeting from "@assets/icons/widgets/metitng.svg";
import Business from "@assets/icons/widgets/Business.svg";
import Training from "@assets/icons/widgets/Training.svg";


export const CardModel: Array<ISmallCards> = [
    {
        icon: <Meeting/>,
        title: "Переговорная",
        subtitle: "Рабочая зона для эффективного командного взаимодействия."
    },
    {
        icon: <Training/>,
        title: "Тренинг-центр",
        subtitle: "Функциональная площадка, оборудованная для организации образовательных мероприятий, лекций, мастер-классов, презентаций."
    },
    {
        icon: <Business/>,
        title: "Бизнес зал",
        subtitle: "Премиум пространство – идеальное место для деловых переговоров, важных встреч и решения рабочих вопросов."
    }
]