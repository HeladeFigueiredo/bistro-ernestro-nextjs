// Quando está tudo em maiúsculo significa que é estático
// Este é um array de objetos que contém os itens da navbar e sua rota

export const NAV_ITEMS = [
  {
    label: 'Home',
    link: '/',
    items: null,
  },
  {
    label: 'Quem Somos',
    link: '/quem-somos',
    items: null,
  },
  {
    label: 'Cardápio',
    link: '/cardapio',
    items: null,
  },
  {
    label: 'Eventos',
    link: '/eventos',
    items: [
      {
        label: 'Confraternização',
        link: '#',
      },
      {
        label: 'Evento Corporativo',
        link: '#',
      },
      {
        label: 'Aniversário',
        link: '#',
      },
      {
        label: 'Casamento',
        link: '#',
      },
    ],
  },
  {
    label: 'Reservas',
    link: '/reservas',
    items: null,
  },
];
