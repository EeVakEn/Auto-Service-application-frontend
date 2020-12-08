import {accessoriesPng, cosmeticsPng, diskPng, oilPng, tirePng, toolsPng} from "../assets/images";

let state = {
    items:
        [
            {
                id: 1,
                img: tirePng,
                alt: '',
                title: 'Шины',
                text: 'Ключевой элемент, гарантирующий безопасность и комфорт езды.'
            },
            {
                id: 2,
                img: diskPng,
                alt: '',
                title: 'Диски',
                text: 'Литые и  кованные диски, а также штамповки.'
            },
            {
                id: 3,
                img: oilPng,
                alt: '',
                title: 'Масла',
                text: 'Моторное и трансмиссное масла, а также технические жидкости.'
            },
            {
                id: 4,
                img: cosmeticsPng,
                alt: '',
                title: 'Автохимия и косметика',
                text: 'Для ремонта, для салона, для кузова и стекол.'
            },
            {
                id: 5,
                img: accessoriesPng,
                alt: '',
                title: 'Принадлежности для автомобиля',
                text: 'Автолампы, подшипники, ремни и многое другое.'
            },
            {
                id: 6,
                img: toolsPng,
                alt: '',
                title: 'Инструменты',
                text: 'Оборудование для автосервиса и гаража.'
            }
        ],
    products:
        [
            {
                id: 1,
                img: tirePng,
                alt: '',
                title: 'NOKIAN TS31907 - Шина зимняя NOKIAN Шина зимняя Nordman 5',
                category: 'Шины',
                price: '3000',
                producer: 'NOKIAN'
            },
            {
                id: 2,
                img: diskPng,
                alt: '',
                title: 'Колесный диск INFORGED IFG39 7.5xR17 5x108 ET42 DIA63.3',
                category: 'Диски',
                price: '3000',
                producer: 'NOKIAN'
            },
            {
                id: 3,
                img: accessoriesPng,
                alt: '',
                title: 'Ремень Isifix "Vixen"',
                category: 'Шины',
                price: '3000',
                producer: 'Принадлежности для автомобиля'
            },
            {
                id: 4,
                img: oilPng,
                alt: '',
                title: 'CASTROL MAGNATEC 5W-30 A3/B4 4L',
                category: 'Масла',
                price: '3000',
                producer: 'NOKIAN'
            },
            {
                id: 5,
                img: cosmeticsPng,
                alt: '',
                title: 'Средство для стекол и зеркал 250 мл Grass АНТИДОЖДЬ',
                category: 'Автохимия и косметика',
                price: '3000',
                producer: 'NOKIAN'
            },
            {
                id: 6,
                img: toolsPng,
                alt: '',
                title: 'Набор ручного инструмента Bosch Promoline',
                category: 'Инструменты',
                price: '3000',
                producer: 'NOKIAN'
            },
            {
                id: 7,
                img: diskPng,
                alt: '',
                title: 'Колесный диск ТЗСК Тольятти Largus Logan 6xR15 4x100 ET50 ',
                category: 'Диски',
                price: '3000',
                producer: 'NOKIAN'
            }
        ],
    user:
        {
            email: 'Евгений Разумовский',
            name: 'eRazumovsky@mail.ru',
            phone: '+79607892003'
        },
    services:
        [
            {
                id: '1',
                name: 'Комплексная диагностика',
                date: '23.10.2020',
                time: '13.00'
            },
            {
                id: '2',
                name: 'Замена масла',
                date: '23.10.2020',
                time: '13.50'
            },
            {
                id: '3',
                name: 'Комплексная диагностика',
                date: '23.10.2020',
                time: '13.00'
            },
        ],
    orders:
        [
            {
                id: '1',
                img: tirePng,
                name: 'NOKIAN TS31907 - Шина зимняя NOKIAN Шина зимняя Nordman 5',
                counter: '1',
                price: '22 919.00'
            },
            {
                id: '2',
                img: tirePng,
                name: 'NOKIAN TS31907 - Шина зимняя NOKIAN Шина зимняя Nordman 5',
                counter: '1',
                price: '22 919.00'
            },
            {
                id: '3',
                img: tirePng,
                name: 'NOKIAN TS31907 - Шина зимняя NOKIAN Шина зимняя Nordman 5',
                counter: '1',
                price: '22 919.00'
            },
        ]
};
export default state;