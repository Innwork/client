import {ICardPlane} from "@src/features/card/card-plane";
import FreeSpace from "@assets/img/plane-card/free-Space.png";
import NonFixed from "@assets/img/plane-card/non-fixed.png";
import PrivateSpace from "@assets/img/plane-card/privateWorkspace.png";
import FixedDesk from "@assets/img/plane-card/fixedDesk.png"
import {Tariffs} from "@src/app/redux/Booking/BookingTypes";

export const PlaneCardModel: Array<ICardPlane> = [
    {
        header: "Свободное пространство",
        tag: Tariffs.FREE_SPACE,
        subtitle: "Офис в аренду, с возможностью организовать рабочую зону под свой проект.",
        src: FreeSpace,
        service: [
            "Высокоскоростной Wi-Fi", "Парковка", "Круглосуточная охрана", "Кухня", "Принтер", "Телефонная будка",
            "Meeting room", "Игровая комната"
        ], rules: "от за 1 квадратный метр", price: "12 000 AMD"
    },
    {
        header: "Приватные воркспейсы",
        tag: Tariffs.PRIVATE_OFFICE,
        subtitle: "Оборудованный офис в аренду для коллективной работы.",
        src: PrivateSpace,
        service: [
            "Meeting room", "Игровая комната", "Круглосуточная охрана", "Кухня", "VIP lounge - 2 hours",
            "Телефонная будка", "Гольф-клуб"
        ], rules: "за 3 месяца от 6 человек", price: "99 990 AMD"
    },
    {
        header: "Фиксированное место",
        tag: Tariffs.FIXED_DESK,
        subtitle: "Возможность закрепить за собой рабочую зону. Для тех, кто любит постоянство и комфорт.",
        src: FixedDesk,
        service: [
            "Высокоскоростной Wi-Fi", "Парковка", "Круглосуточная охрана", "Кухня", "Принтер", "Телефонная будка",
            "Meeting room", "Игровая комната"
        ], rules: "В месяц", price: "70 000 AMD"
    },
]