import {TeamMember} from "@src/pages/About/widgets/our-team/OurTeam";
import Sos from "@assets/img/About/team/Sos-min.png";
import Lida from "@assets/img/About/team/Lida-min.png";
import Anahit from "@assets/img/About/team/Anahit-min.png";
import Mnatsakan from "@assets/img/About/team/Mnatsakan-min.png";


export const Team: Array<TeamMember> = [
    {
        src: Sos,
        fullName: "Сос Мурадян",
        post: "Директор основатель"
    },
    {
        src: Mnatsakan,
        fullName: "Мнацакан Аветисян",
        post: "Финансовый директор"
    },
    {
        src: Anahit,
        fullName: "Анаит Гарибян",
        post: "Юрист"
    },
    {
        src: Lida,
        fullName: "Лида Петросян",
        post: "Сервис менеджер"
    }
]