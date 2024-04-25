import {ICardPlane} from "@src/features/card/card-plane";
import {FixedDescPng, NonFixedPng, PrivateWorkspacePng} from "@src/shared/assets/img/plane-card";
import FreeSpace from "@src/shared/assets/img/plane-card/free-Space.png";
import {Tariffs} from "@src/app/redux/Booking/BookingTypes";

export const PlaneCardModel: Array<ICardPlane> = [
    {
        header: "Свободное пространство",
        tag: Tariffs.FREE_SPACE,
        subtitle: "Офис в аренду или же использование помещения в коммерческих целях с возможностью организовать рабочую зону под свой проект.",
        src: FreeSpace,
        service: [
            "Высокоскоростной Wi-Fi", "Парковка", "Круглосуточная охрана", "Кухня", "Принтер", "Телефонная будка",
            "Meeting room", "Игровая комната"
        ], rules: "от за 1 квадратный метр", price: "12 000 AMD"
    },
    {
        header: "ПРИВАТНЫЕ ВОРКСПЕЙСЫ",
        tag: Tariffs.PRIVATE_OFFICE,
        subtitle: "Оборудованный офис в аренду для коллективной работы.",
        src: PrivateWorkspacePng,
        service: [
            "Meeting room", "Игровая комната", "Круглосуточная охрана", "Кухня", "VIP lounge - 2 hours",
            "Телефонная будка", "Гольф-клуб"
        ], rules: "за 3 месяца от 6 человек", price: "120 000 AMD"
    },
    {
        header: "ФИКСИРОВАННОЕ МЕСТО",
        tag: Tariffs.FIXED_DESK,
        subtitle: "Возможность закрепить за собой рабочую зону. Для тех, кто любит постоянство и комфорт.",
        src: NonFixedPng,
        service: [
            "Высокоскоростной Wi-Fi", "Парковка", "Круглосуточная охрана", "Кухня", "Принтер", "Телефонная будка",
            "Meeting room", "Игровая комната"
        ], rules: "В месяц", price: "69 000 AMD"
    },
    {
        header: "Нефиксированное место",
        tag: Tariffs.NON_FIXED_FLEXI_DESK,
        subtitle: "Выбор свободного рабочего места в любой зоне коворкинга для вашей деятельности.",
        src: FixedDescPng,
        service: [
            "Высокоскоростной Wi-Fi", "Парковка", "Круглосуточная охрана", "Кухня", "Принтер", "Телефонная будка"
        ], rules: "В час", price: "2 500 AMD"
    }
]