import { ArticleCard } from '@core/models/article-card';
import { Category } from '@core/types/category';
import { State } from '@core/types/state';

interface Data {
  articleCards: Array<ArticleCard>;
}

export const Data: Data = {
  articleCards: [
    {
      id: 1,
      image: 'https://source.unsplash.com/featured/?electronics,laptop',
      title: 'Ryzen 4600G',
      dateOfPublication: 'Hoy',
      proposalsQuantity: 5,
      category: Category.Electronics,
      state: State.New,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?electronics,laptop',
      title: 'MacBook Pro 2021',
      dateOfPublication: 'Ayer',
      proposalsQuantity: 3,
      category: Category.Electronics,
      state: State.Preowned,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?electronics,phone',
      title: 'Samsung Galaxy S21',
      dateOfPublication: 'Hace 1 día',
      proposalsQuantity: 8,
      category: Category.Electronics,
      state: State.Used,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?electronics,camera',
      title: 'Canon EOS R5',
      dateOfPublication: 'Hace 2 días',
      proposalsQuantity: 2,
      category: Category.Electronics,
      state: State.LowQuality,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?books,reading',
      title: "Harry Potter and the Philosopher's Stone",
      dateOfPublication: 'Hoy',
      proposalsQuantity: 1,
      category: Category.TextBooksEducationalMaterial,
      state: State.New,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?books,novel',
      title: 'The Great Gatsby',
      dateOfPublication: 'Ayer',
      proposalsQuantity: 0,
      category: Category.TextBooksEducationalMaterial,
      state: State.Preowned,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?books,fantasy',
      title: 'El señor de los anillos',
      dateOfPublication: 'Hace 1 día',
      proposalsQuantity: 4,
      category: Category.TextBooksEducationalMaterial,
      state: State.Used,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?art,painting',
      title: 'Pintura al óleo',
      dateOfPublication: 'Hace 2 días',
      proposalsQuantity: 3,
      category: Category.ArtsHandicrafts,
      state: State.New,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/featured/?music,guitar',
      title: 'Guitarra acústica',
      dateOfPublication: 'Hoy',
      proposalsQuantity: 6,
      category: Category.MusicalInstruments,
      state: State.Used,
    },
  ],
};
