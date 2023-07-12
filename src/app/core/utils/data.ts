import { ArticleCard } from '@core/models/article-card';
import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { ViewRatingCard } from '@core/types/view-rating-card';
import { ExchangeCard } from '@core/types/exchange-card';
import { Article } from '@core/models/article';

interface Data {
  article: Article;
  viewRatingCards: Array<ViewRatingCard>;
  exchangeCards: Array<ExchangeCard>;
  articleCards: Array<ArticleCard>;
}

export const Data: Data = {
  articleCards: [
    {
      id: '1',
      image: 'https://source.unsplash.com/featured/?electronics,laptop',
      title: 'Ryzen 4600G',
      dateOfPublication: 'Hoy',
      proposalsQuantity: 5,
      category: Category.Electronics,
      state: State.New,
    },
    {
      id: '2',
      image: 'https://source.unsplash.com/featured/?electronics,laptop',
      title: 'MacBook Pro 2021',
      dateOfPublication: 'Ayer',
      proposalsQuantity: 3,
      category: Category.Electronics,
      state: State.Preowned,
    },
    {
      id: '3',
      image: 'https://source.unsplash.com/featured/?electronics,phone',
      title: 'Samsung Galaxy S21',
      dateOfPublication: 'Hace 1 día',
      proposalsQuantity: 8,
      category: Category.Electronics,
      state: State.Used,
    },
    {
      id: '4',
      image: 'https://source.unsplash.com/featured/?electronics,camera',
      title: 'Canon EOS R5',
      dateOfPublication: 'Hace 2 días',
      proposalsQuantity: 2,
      category: Category.Electronics,
      state: State.LowQuality,
    },
    {
      id: '5',
      image: 'https://source.unsplash.com/featured/?books,reading',
      title: "Harry Potter and the Philosopher's Stone",
      dateOfPublication: 'Hoy',
      proposalsQuantity: 1,
      category: Category.TextBooksEducationalMaterial,
      state: State.New,
    },
    {
      id: '6',
      image: 'https://source.unsplash.com/featured/?books,novel',
      title: 'The Great Gatsby',
      dateOfPublication: 'Ayer',
      proposalsQuantity: 0,
      category: Category.TextBooksEducationalMaterial,
      state: State.Preowned,
    },
    {
      id: '7',
      image: 'https://source.unsplash.com/featured/?books,fantasy',
      title: 'El señor de los anillos',
      dateOfPublication: 'Hace 1 día',
      proposalsQuantity: 4,
      category: Category.TextBooksEducationalMaterial,
      state: State.Used,
    },
    {
      id: '8',
      image: 'https://source.unsplash.com/featured/?art,painting',
      title: 'Pintura al óleo',
      dateOfPublication: 'Hace 2 días',
      proposalsQuantity: 3,
      category: Category.ArtsHandicrafts,
      state: State.New,
    },
    {
      id: '9',
      image: 'https://source.unsplash.com/featured/?music,guitar',
      title: 'Guitarra acústica',
      dateOfPublication: 'Hoy',
      proposalsQuantity: 6,
      category: Category.MusicalInstruments,
      state: State.Used,
    },
    {
      id: '10',
      image: 'https://source.unsplash.com/featured/?music,guitar',
      title: 'Guitarra acústica',
      dateOfPublication: 'Hoy',
      proposalsQuantity: 6,
      category: Category.MusicalInstruments,
      state: State.Used,
    },
  ],
  viewRatingCards: [
    {
      userName: 'Juan Perez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      rating: 4,
      publishDate: '30.08.2023, 13:45',
      comment:
        'El producto está en perfectas condiciones, coordinamos la entrega y todo salió bien.',
    },
    {
      userName: 'Maria Rodriguez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      rating: 5,
      publishDate: '02.02.2022, 9:10',
      comment:
        'El producto está en perfectas condiciones, coordinamos la entrega y todo salió bien.',
    },
  ],
  exchangeCards: [
    {
      exchangeId: 'UUID',
      userName: 'Juan Perez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      comment:
        'El producto está en perfectas condiciones, coordinamos la entrega y todo salió bien.',
      date: '30.08.2023, 13:45',
    },
    {
      exchangeId: 'UUID',
      userName: 'Maria Rodriguez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      comment:
        'El producto está en perfectas condiciones, coordinamos la entrega y todo salió bien.',
      date: '02.02.2022, 9:10',
    },

    {
      exchangeId: 'UUID',
      userName: 'Maria Rodriguez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      comment:
        'El producto está en perfectas condiciones, coordinamos la entrega y todo salió bien.',
      date: '02.02.2022, 9:10',
    },

    {
      exchangeId: 'UUID',
      userName: 'Maria Rodriguez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      comment:
        'El producto está en perfectas condiciones, coordinamos la entrega y todo salió bien.',
      date: '02.02.2022, 9:10',
    },

    {
      exchangeId: 'UUID',
      userName: 'Maria Rodriguez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      comment:
        'El producto está en perfectas condiciones, coordinamos la entrega y todo salió bien.',
      date: '02.02.2022, 9:10',
    },
  ],
  article: {
    id: '1',
    image: 'https://picsum.photos/200/300',
    title: 'Teclado Mecánico Logitech',
    description:
      'Este teclado me lo dieron de regalo, está nuevo, apenas lo usé para comprobar que funciona, entrgo con su caja y accesorios.',
    datePublished: 'Hace 2 días',
    proposalsQuantity: 3,
    category: Category.SportingGoods,
    state: State.New,
    user: {
      image: 'https://picsum.photos/200/300',
      name: 'Víctor Arreaga',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ' +
        'consectetur aliquam, nisl nisl aliquet nisl, euismod. ',
      rating: 4,
      numberOfExchanges: 5,
    },
    gallery: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
  },
};
