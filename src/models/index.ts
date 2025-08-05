 export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    image: string;
    categoryId?: number;
    slug: string;
    skinType?: string[]; // Array of skin types the product is suitable for
}
 export interface Category{
    id: number;
    name: string;
    image: string;
    products: Product[];
}