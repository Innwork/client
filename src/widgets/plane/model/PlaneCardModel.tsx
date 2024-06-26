import {ICardPlane} from "@src/features/card/card-plane";
import FixedDescPng from "@assets/img/plane-card/fixed-desc.png";
import NonFixedPng from "@assets/img/plane-card/non-fixed.png";
import PrivateWorkspacePng from "@assets/img/plane-card/private-workspace.png";
import FreeSpace from "@assets/img/plane-card/free-Space.png";
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
        src: PrivateWorkspacePng,
        service: [
            "Meeting room", "Игровая комната", "Круглосуточная охрана", "Кухня", "VIP lounge - 2 hours",
            "Телефонная будка", "Гольф-клуб"
        ], rules: "за 3 месяца от 6 человек", price: "120 000 AMD"
    },
    {
        header: "Фиксированное место",
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