import { TeamMember } from "@src/pages/public/About/widgets/our-team/OurTeam";
import Sos from "@assets/img/About/team/Sos-min.png";
import Mnatsakan from "@assets/img/About/team/Mnatsakan-min.png";
// import Sahakyan from "@assets/img/About/team/Sahakyan.jpg";
import Simonyan from "@assets/img/About/team/Simonyan.jpg";

export const team: Array<TeamMember> = [
  {
    src: Sos,
    fullName: "Сос Мурадян",
    post: "Директор основатель",
  },
  {
    src: Mnatsakan,
    fullName: "Мнацакан Аветисян",
    post: "Финансовый директор",
  },
  // {
  //     src: Sahakyan,
  //     fullName: "Рипсиме Саакян",
  //     post: "Менеджер по продажам"
  // },
  {
    src: Simonyan,
    fullName: "Айкуи Симонян",
    post: "Менеджер по продажам",
  },
];
