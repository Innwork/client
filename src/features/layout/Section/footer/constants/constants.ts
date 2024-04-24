import {InstagramSvg, FaceBookSvg} from "@src/shared/assets/icons/Footer";
export const footerItems = {
    left: {
        text: "Наша команда специалистов, доступна 24/7, чтобы помочь вам найти лучшее решение для вашего бизнеса Присоединяйтесь к нашему коворкингу и станьте частью нашего сообщества творческих и предприимчивых людей."
    },
    center: {
        title: 'Компания',
        items: [
            {text: 'О нас', to: '/about'},
            {text: 'Информация', to: '#'},
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
        {to: "https://a26202-04a7.x.d-f.pw/api/info/file?file_name=Terms_of_use.docx&", text: "Пользовательское соглашение"},
        {to: "https://a26202-04a7.x.d-f.pw/api/info/file?file_name=For_copyright_holders.docx&", text: "Для правообладателей"},
        {to: "https://a26202-04a7.x.d-f.pw/ api/info/file?file_name=Privacy_Policy.docx&", text: "Политика конфиденциальности"}
    ]
}