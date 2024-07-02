import InstagramSvg from "@assets/icons/Footer/insta.svg";
import FaceBookSvg from "@assets/icons/Footer/facebook.svg";

export const footerItems = {
    left: {
        text: "Наша команда специалистов, доступна 24/7, чтобы помочь вам найти лучшее решение для вашего бизнеса Присоединяйтесь к нашему коворкингу и станьте частью нашего сообщества творческих и предприимчивых людей."
    },
    center: {
        title: 'Компания',
        items: [
            {text: 'О нас', to: '/about'},
            {text: 'Информация', to: '/info'},
            {text: 'Контакты', to: '#'},
            {text: 'Новости', to: '#'}
        ]
    },
    right: {
        title: 'Контактная информация',
        items: [
            {text: 'Телефон'},
            {text: 'Почта'},
            {text: 'Локация'},
        ],
        socialMedia: [
            {socialMediaSvg: FaceBookSvg, to: 'https://m.facebook.com/innworkoffices?mibextid=LQQJ4d'},
            {socialMediaSvg: InstagramSvg, to: 'https://www.instagram.com/innwork_offices?igsh=aXdwN2h5aHY0a21s'},
        ]
    },
    agreements: [
        {to: "/terms", text: "Пользовательское соглашение"},
        {to: "/copyright", text: "Для правообладателей"},
        {to: "/rules", text: "Правила пользования"},
        {to: "/privacy", text: "Политика конфиденциальности"}
    ]
}