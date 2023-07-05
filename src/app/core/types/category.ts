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
}

export class CategoryService {
    categories: ICategory[];

    constructor() {
        this.categories = [{
            name: Category.TextBooksEducationalMaterial,
            includes: "Laptops, monitores, computadoras, teclados, mouse, tablets, impresoras, discos duros externos, auriculares, cargadores, adaptadores, cargadores, cámaras fotográficas, reproductores de música, videoconsolas, calculadoras científicas, entre otros."
        }, {
            name: Category.OfficeSupplies, includes: "Papel, bolígrafos, grapadoras, etc."
        }, {
            name: Category.Electronics, includes: "Ordenadores, móviles, tablets, etc."
        }, {
            name: Category.FurnitureAndDecoration, includes: "Mesas, sillas, estanterías, etc."
        }, {
            name: Category.Clothing, includes: "Camisetas, pantalones, zapatos, etc."
        }, {
            name: Category.LaboratoryMaterial, includes: "Tubos de ensayo, probetas, etc."
        }, {name: Category.MusicalInstruments, includes: "Guitarras, pianos, etc."}, {
            name: Category.SportingGoods, includes: "Balones, raquetas, etc."
        }, {name: Category.ArtsHandicrafts, includes: "Pinceles, pinturas, etc."}, {
            name: Category.ToysGames, includes: "Muñecas, coches, etc."
        }];
    }

    getIncludes(category: Category): string {
        return this.categories.find((c: ICategory) => c.name === category)?.includes || "";
    }
}