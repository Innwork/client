import {ISmallCards} from "@src/shared/ui/cards";
import Space from "@src/shared/assets/icons/widgets/space.svg";
import Security from "@src/shared/assets/icons/widgets/SECURITY-CAMERA.svg";
import Parking from "@src/shared/assets/icons/widgets/parking.svg";
import WiFi from "@src/shared/assets/icons/widgets/wifi.svg";
import GameZone from "@src/shared/assets/icons/widgets/GAME ZONE.svg";
import Locker from "@src/shared/assets/icons/widgets/LOCKER.svg";


export const CardBenefits: Array<ISmallCards> = [
    {
        icon: <Space/>,
        title: "Современные пространства",
        subtitle: "Оборудованная площадка для различного формата работы: индивидуально, круглый стол, командное взаимодействие, переговоры."
    },
    {
        icon: <WiFi/>,
        title: "Высокоскоростной Wi-Fi",
        subtitle: "Интернет-соединение высокой скорости и доступ к цифровым инструментам."
    },
    {
        icon: <Locker/>,
        title: "Шкафчик для хранения вещей",
        subtitle: "для хранения вещей. Оставьте все лишнее и сконцентрируйтесь на важных задачах."
    },
    {
        icon: <GameZone/>,
        title: "Игровая комната",
        subtitle: "Место, где можно замедлиться и немного отдохнуть."
    },
    {
        icon: <Security/>,
        title: "Круглосуточная охрана",
        subtitle: "Мы открыты 24 часа. Работайте в удобное для себя время."
    },
    {
        icon: <Parking/>,
        title: "Парковка",
        subtitle: "Просторная парковочная зона, безопасность, чистота."
    }
]