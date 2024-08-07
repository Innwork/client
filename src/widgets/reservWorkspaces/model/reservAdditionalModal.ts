import {IReservPagination} from "@src/widgets/reservWorkspaces/types/reservWorkspaceType";
import businessLoungeSmall from "@assets/img/AdditonalSpace/business-longe.png";
import meetingRoomSmall from "@assets/img/AdditonalSpace/meeting-room.png";
import trainingCenterSmall from "@assets/img/AdditonalSpace/traning-center.png";
import {Workspaces} from "@src/app/redux/Booking/BookingTypes";

export type TReservAdditionalModel  = {
    pagination: Array<IReservPagination>
}

export const reservAdditionalModel: TReservAdditionalModel= {
    pagination: [
        {
            src: businessLoungeSmall,
            tag: Workspaces.BUSINESS_LOUNGE,
            header: "Бизнес зал",
            title: "Премиум пространство – идеальное место для деловых переговоров, важных встреч и решения рабочих вопросов.",
            price: "от 5 500 AMD в час"
        },
        {
            src: meetingRoomSmall,
            tag: Workspaces.MEETING_ROOM,
            header: "Переговорная",
            title: "Рабочая зона для эффективного командного взаимодействия.",
            price: "от 5 500 AMD в час"
        },
        {
            src: trainingCenterSmall,
            tag: Workspaces.TRAINING_CENTER,
            header: "Тренинг-центр",
            title: "Функциональная площадка, оборудованная для организации образовательных мероприятий, лекций, мастер-классов, презентаций.",
            price: "от 7 000 AMD в час"
        }
    ]
}