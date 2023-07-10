export enum Category {
  TextBooksEducationalMaterial = "Libros texto material educativo",
  OfficeSupplies = "Material de oficina",
  Electronics = "Electrónica",
  FurnitureAndDecoration = "Mobiliario y decoración",
  Clothing = "Indumentaria",
  LaboratoryMaterial = "Material de laboratorio",
  MusicalInstruments = "Instrumentos musicales",
  SportingGoods = "Artículos deportivos",
  ArtsHandicrafts = "Artes manuales",
  ToysGames = "Juegos y juguetes",
}

interface ICategory {
  name: string;
  includes: string;
  withGender: boolean;
}

export class CategoryService {
  categories: ICategory[];

  constructor() {
    this.categories = [
      {
        name: Category.TextBooksEducationalMaterial,
        includes:
          "Laptops, monitores, computadoras, teclados, mouse, tablets, impresoras, discos duros externos, auriculares, cargadores, adaptadores, cargadores, cámaras fotográficas, reproductores de música, videoconsolas, calculadoras científicas, entre otros.",
        withGender: false,
      },
      {
        name: Category.OfficeSupplies,
        includes: "Papel, bolígrafos, grapadoras, etc.",
        withGender: false,
      },
      {
        name: Category.Electronics,
        includes: "Ordenadores, móviles, tablets, etc.",
        withGender: false,
      },
      {
        name: Category.FurnitureAndDecoration,
        includes: "Mesas, sillas, estanterías, etc.",
        withGender: false,
      },
      {
        name: Category.Clothing,
        includes: "Camisetas, pantalones, zapatos, etc.",
        withGender: true,
      },
      {
        name: Category.LaboratoryMaterial,
        includes: "Tubos de ensayo, probetas, etc.",
        withGender: false,
      },
      {
        name: Category.MusicalInstruments,
        includes: "Guitarras, pianos, etc.",
        withGender: false,
      },
      {
        name: Category.SportingGoods,
        includes: "Balones, raquetas, etc.",
        withGender: false,
      },
      {
        name: Category.ArtsHandicrafts,
        includes: "Pinceles, pinturas, etc.",
        withGender: false,
      },
      {
        name: Category.ToysGames,
        includes: "Muñecas, coches, etc.",
        withGender: true,
      },
    ];
  }

  getIncludes(category: Category): string {
    return (
      this.categories.find((c: ICategory) => c.name === category)?.includes ||
      ""
    );
  }

  isWithGender(category: Category) {
    return (
      this.categories.find((c: ICategory) => c.name === category)?.withGender ||
      false
    );
  }
}
