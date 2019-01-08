const pages = [
  {
    title: 'Misheard lyrics',
    link: '/misheard',
  },
];

export default {
  title: 'Музыка',
  description: 'Я люблю музыку. Почему бы не хранить здесь то, что каким-то образом касается этого искусства.',
  apiURL: 'http://localhost:4000/',
  pages: [
    {
      title: 'Песенник',
      link: '/chords',
    },
    {
      title: 'Инструменты',
      subpages: [
        { title: 'Гитара' },
        { title: 'Мандолина' },
      ],
    },
    {
      title: 'Стили',
      subpages: [
        { title: 'Попса' },
        { title: 'Русский Рок' },
      ],
    },
    {
      title: 'Списки',
      subpages: [
        { title: '100 лучших рок-альбомов' },
      ],
    },
    {
      title: 'Разное',
      link: '/other',
      subpages: pages,
    },
    {
      title: 'Каверы',
    },
    {
      title: 'Субкультуры',
    },
  ],
  wiki: pages,
};
