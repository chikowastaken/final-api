export declare class CreateProductDto {
    title: string;
    description: string;
    salePrice: number;
    image: string;
    price: number;
}
export declare class UpdateProductDto {
    id: string;
    title: string;
    description: string;
    salePrice: number;
    image: string;
    price: number;
}
export declare class CreateManyProductDto {
    products: CreateProductDto[];
}
