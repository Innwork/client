import InstagramSvg from "@assets/icons/Footer/insta.svg";
import FaceBookSvg from "@assets/icons/Footer/facebook.svg";
import * as process from "process";
export const footerItems = {
    left: {
        text: "Наша команда специалистов, доступна 24/7, чтобы помочь вам найти лучшее решение для вашего бизнеса Присоединяйтесь к нашему коворкингу и станьте частью нашего сообщества творческих и предприимчивых людей."
    },
    center: {
        title: 'Компания',
        items: [
            {text: 'О нас', to: '/about'},
            {text: 'Rules for using', to: '/rules'},
            {text: 'Terms of use', to: '/terms'},
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
        {to: `${process.env.REACT_APP_HOST}docs?filename=Terms_of_use.docx&`, text: "Пользовательское соглашение"},
        {to: `${process.env.REACT_APP_HOST}docs?filename=For_copyright_holders.docx&`, text: "Для правообладателей"},
        {to: `${process.env.REACT_APP_HOST}docs?filename=Privacy_Policy.docx&`, text: "Политика конфиденциальности"}
    ]
}