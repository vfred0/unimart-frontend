import { ArticleCard } from '@core/models/article-card';
import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { ViewRatingCard } from '@core/models/view-rating-card';
import { ExchangeCard } from '@core/models/exchange-card';
import { ArticlePage } from '@core/models/article-page';
import { HeaderDetail } from '@core/utils/header-detail';
import { Gender } from '@core/types/gender';
import { Article } from '@core/models/article';

interface Data {
  headerDetail: HeaderDetail;
  articlePage: ArticlePage;
  article: Article;
  viewRatingCards: Array<ViewRatingCard>;
  exchangeCards: Array<ExchangeCard>;
  articleCards: Array<ArticleCard>;
}

export const Data: Data = {
  headerDetail: {
    photo: 'https://source.unsplash.com/featured/?person',
    title: 'Juan Perez',
    description: '2021.06.01, 10:00',
  },
  articleCards: [
    {
      id: '1',
      image: 'https://source.unsplash.com/featured/?electronics,laptop',
      title: 'Ryzen 4600G',
      dateOfPublication: 'Hoy',
      numberProposals: 5,
      category: Category.Electronics,
      state: State.New,
    },
    {
      id: '2',
      image: 'https://source.unsplash.com/featured/?electronics,laptop',
      title: 'MacBook Pro 2021',
      dateOfPublication: 'Ayer',
      numberProposals: 3,
      category: Category.Electronics,
      state: State.Preowned,
    },
    {
      id: '3',
      image: 'https://source.unsplash.com/featured/?electronics,phone',
      title: 'Samsung Galaxy S21',
      dateOfPublication: 'Hace 1 día',
      numberProposals: 8,
      category: Category.Electronics,
      state: State.Used,
    },
    {
      id: '4',
      image: 'https://source.unsplash.com/featured/?electronics,camera',
      title: 'Canon EOS R5',
      dateOfPublication: 'Hace 2 días',
      numberProposals: 2,
      category: Category.Electronics,
      state: State.LowQuality,
    },
    {
      id: '5',
      image: 'https://source.unsplash.com/featured/?books,reading',
      title: "Harry Potter and the Philosopher's Stone",
      dateOfPublication: 'Hoy',
      numberProposals: 1,
      category: Category.TextBooksEducationalMaterial,
      state: State.New,
    },
    {
      id: '6',
      image: 'https://source.unsplash.com/featured/?books,novel',
      title: 'The Great Gatsby',
      dateOfPublication: 'Ayer',
      numberProposals: 0,
      category: Category.TextBooksEducationalMaterial,
      state: State.Preowned,
    },
    {
      id: '7',
      image: 'https://source.unsplash.com/featured/?books,fantasy',
      title: 'El señor de los anillos',
      dateOfPublication: 'Hace 1 día',
      numberProposals: 4,
      category: Category.TextBooksEducationalMaterial,
      state: State.Used,
    },
    {
      id: '8',
      image: 'https://source.unsplash.com/featured/?art,painting',
      title: 'Pintura al óleo',
      dateOfPublication: 'Hace 2 días',
      numberProposals: 3,
      category: Category.ArtsHandicrafts,
      state: State.New,
    },
    {
      id: '9',
      image: 'https://source.unsplash.com/featured/?music,guitar',
      title: 'Guitarra acústica',
      dateOfPublication: 'Hoy',
      numberProposals: 6,
      category: Category.MusicalInstruments,
      state: State.Used,
    },
    {
      id: '10',
      image: 'https://source.unsplash.com/featured/?music,guitar',
      title: 'Guitarra acústica',
      dateOfPublication: 'Hoy',
      numberProposals: 6,
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
      articleToExchange: 'Ryzen 4600G',
      articleToReceive: 'MacBook Pro 2021',
      date: '30.08.2023, 13:45',
    },
    {
      exchangeId: 'UUID',
      userName: 'Maria Rodriguez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      articleToExchange: 'Pantalón de vestir',
      articleToReceive: 'Camisa de vestir',
      date: '02.02.2022, 9:10',
    },

    {
      exchangeId: 'UUID',
      userName: 'Maria Rodriguez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      articleToExchange: 'Cámara Canon EOS R5',
      articleToReceive: 'Cámara Xiaomi',
      date: '02.02.2022, 9:10',
    },

    {
      exchangeId: 'UUID',
      userName: 'Maria Rodriguez',
      userPhoto: 'https://source.unsplash.com/featured/?person',
      articleToExchange: 'Xiamo Redmi Note 10',
      articleToReceive: 'Samsung Galaxy S21',
      date: '02.02.2022, 9:10',
    },
  ],
  articlePage: {
    id: '1',
    image: 'https://picsum.photos/200/300',
    title: 'Teclado Mecánico Logitech',
    description:
      'Este teclado me lo dieron de regalo, está nuevo, apenas lo usé para comprobar que funciona, entrgo con su caja y accesorios.',
    date: 'Hace 2 días',
    numbersProposals: 3,
    category: Category.SportingGoods,
    state: State.New,
    user: {
      photo: 'https://picsum.photos/200/300',
      name: 'Víctor Arreaga',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ' +
        'consectetur aliquam, nisl nisl aliquet nisl, euismod. ',
      rating: 4,
      numberOfExchanges: 5,
      whatsapp: '0999999999',
    },
    gender: Gender.Female,
    images: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
  },
  article: {
    id: '1',
    description:
      'Este pantalón me lo dieron de regalo, está nuevo, apenas lo usé para comprobar que funciona, entrgo con su caja y accesorios.',
    category: Category.Clothing,
    state: State.Used,
    title: 'Panatalón de vestir',
    images: ['https://is.gd/AE9rmG', 'https://is.gd/AE9rmG'],
    gender: Gender.Male,
  },
};
