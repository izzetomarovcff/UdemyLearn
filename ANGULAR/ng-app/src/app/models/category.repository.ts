import { Category } from "./category";
export class CategoryRepository {
    private category: Category[] = [
        { id: 1, name: "Telefon", isActive: true },
        { id: 2, name: "Bilgisayar", isActive: true },
        { id: 3, name: "Televizyon", isActive: true },
        { id: 4, name: "Araba", isActive: true },

    ]

    getCategory() {
        return this.category.filter(c => c.isActive);
    }

    getCategoryById(id: number): Category | undefined {
        return this.category.find(c => c.id == id)
    }
}