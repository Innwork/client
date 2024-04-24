import {
    businessLoungeAdditional, meetingRoomAdditional, trainingCenterAdditional
} from "@src/shared/assets/img/AdditonalSpace";
import {IAdditionSlide} from "@src/widgets/additional/ui/AdditionSlide";

type TAdditionalModal = {
    pagination: {
        src: string,
        header: string,
        title: string,
        price: string,
    }[]
    slides: Array<IAdditionSlide>
};

export const additionalModal: TAdditionalModal = {
    slides: [
        {
            src: businessLoungeAdditional,
            header: "Бизнес зал",
            price: "от 9 500 AMD в час"
        },
        {
            src: meetingRoomAdditional,
            header: "Переговорная",
            price: "от 10 000 AMD в час"
        },
        {
            src: trainingCenterAdditional,
            header: "Тренинг-центр",
            price: "от 9 500 AMD в час"
        }
    ],
    pagination: [
        {
            src: businessLoungeAdditional,
            header: "Бизнес зал",
            title: "Пространство для успешных деловых встреч и переговоров",
            price: "от 9 500 AMD в час"
        },
        {
            src: meetingRoomAdditional,
            header: "Переговорная",
            title: "Место, где открываются перспективы для совместной работы и сотрудничества",
            price: "от 10 000 AMD в час"
        },
        {
            src: trainingCenterAdditional,
            header: "Тренинг-центр",
            title: "Инновационная среда для образования и развития",
            price: "от 9 500 AMD в час"
        }
    ]
}