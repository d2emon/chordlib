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
      subPages: [
        { title: 'Гитара' },
        { title: 'Мандолина' },
      ],
    },
    {
      title: 'Стили',
      subPages: [
        { title: 'Попса' },
        { title: 'Русский Рок' },
      ],
    },
    {
      title: 'Списки',
      subPages: [
        { title: '100 лучших рок-альбомов' },
      ],
    },
    {
      title: 'Каверы',
    },
    {
      title: 'Субкультуры',
      link: 'subkultury',
    },
  ],
};
