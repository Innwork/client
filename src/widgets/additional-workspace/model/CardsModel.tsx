import {ISmallCards} from "@src/shared/ui/cards";
import Meeting from "@src/shared/assets/icons/widgets/metitng.svg";
import Business from "@src/shared/assets/icons/widgets/Business.svg";
import Training from "@src/shared/assets/icons/widgets/Training.svg";


export const CardModel: Array<ISmallCards> = [
    {
        icon: <Meeting/>,
        title: "Meeting-room",
        subtitle: " Рабочая зона для эффективного командного взаимодействия."
    },
    {
        icon: <Training/>,
        title: "Training center",
        subtitle: "Функциональная площадка, оборудованная для организации образовательных мероприятий, лекций, мастер-классов, презентаций."
    },
    {
        icon: <Business/>,
        title: "Business lounge",
        subtitle: "Премиум пространство – идеальное место для деловых переговоров, важных встреч и решения рабочих вопросов."
    }
]