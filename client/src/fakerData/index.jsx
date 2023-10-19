import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram, BsFillPersonFill } from "react-icons/bs";
import HeaderBG from '../assets/png/header.png'
import { CategBlock1PNG, CategBlock2PNG, FaneraIcon1 } from "../assets";
export const NavigateTopDATA = [
    { id: 1, svg: <BsTelegram />, href: '/' },
    { id: 2, svg: <AiOutlineInstagram />, href: '/' },
    { id: 3, svg: <AiFillFacebook />, href: '/' },
    { id: 4, svg: <AiFillTwitterCircle />, href: '/' },
]
export const NavigateBottomSVGDATA = [
    { id: 1, icon: <BsFillPersonFill />, title: "Аккаунт", href: '/' },
    { id: 2, icon: <BsFillPersonFill />, title: "КОРЗИНА", href: '/' },
    { id: 3, icon: <BsFillPersonFill />, title: "СПОДОБАЛОСЬ", href: '/' },
]

export const NavigateBottomMENUDATA = [
    { id: 1, title: "Главная", href: '/', current: true },
    { id: 2, title: "О нас", href: '/about', current: false },
    { id: 3, title: "Блог", href: '/blog', current: false },
    { id: 4, title: "Контакти", href: '/contact', current: false },
    { id: 5, title: "Каталог", href: '/catalog', current: false },
]

export const NavigateBottomOFERDATA = [
    { id: 1, title: "Оферта", href: '/' },
    { id: 2, title: "Доставка", href: '/' },
    { id: 3, title: "FAQ", href: '/' }
]


export const SliderDATA = [
    { id: 1, title: 'Уникальное ТП', text: "Различные виды карт из натурального дерева и приложений для них, чтобы отвечать потребностям наших клиентов. Чтобы наш декор был лучшим, мы сотрудничаем с лучшими производителями сырья и красок в отрасли", subText: 'При нажатии, изменяются баннеры вместе с текстом или сделать большие баннеры для более простой верстки.', image: HeaderBG },
    { id: 2, title: 'Уникальное ТП', text: "Различные виды карт из натурального дерева и приложений для них, чтобы отвечать потребностям наших клиентов. Чтобы наш декор был лучшим, мы сотрудничаем с лучшими производителями сырья и красок в отрасли", subText: 'При нажатии, изменяются баннеры вместе с текстом или сделать большие баннеры для более простой верстки.', image: HeaderBG },
    { id: 3, title: 'Уникальное ТП', text: "Различные виды карт из натурального дерева и приложений для них, чтобы отвечать потребностям наших клиентов. Чтобы наш декор был лучшим, мы сотрудничаем с лучшими производителями сырья и красок в отрасли", subText: 'При нажатии, изменяются баннеры вместе с текстом или сделать большие баннеры для более простой верстки.', image: HeaderBG }

]

export const FaneraItemDATA = [
    { id: 1, title: "Персонализация", text: "Обратным процессом персонализации выступает деперсонализация, которая представляет собой нарушения самосознания", svg: FaneraIcon1 },
    { id: 2, title: "Персонализация", text: "Обратным процессом персонализации выступает деперсонализация, которая представляет собой нарушения самосознания", svg: FaneraIcon1 },
    { id: 3, title: "Персонализация", text: "Обратным процессом персонализации выступает деперсонализация, которая представляет собой нарушения самосознания", svg: FaneraIcon1, top: "fanerItemActive" },
    { id: 4, title: "Персонализация", text: "Обратным процессом персонализации выступает деперсонализация, которая представляет собой нарушения самосознания", svg: FaneraIcon1, top: "fanerItemActive" },
]

export const CategoryDATA = [
    { id: 1, title: "Однослойные карты", active: false, image: CategBlock1PNG },
    { id: 2, title: "Многослойные карты", active: false, image: CategBlock2PNG },
    { id: 3, title: "Однослойные карты", active: false, image: CategBlock1PNG },
    { id: 4, title: "Однослойные карты", active: false, image: CategBlock1PNG },
    { id: 5, title: "Однослойные карты", active: false, image: CategBlock2PNG },
    { id: 6, title: "Однослойные карты", active: false, image: CategBlock1PNG },
]