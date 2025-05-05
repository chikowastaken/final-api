import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto, CreateManyProductDto, UpdateProductDto } from './dtos/create-product.dto';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(body: CreateProductDto): Promise<Product>;
    update(body: UpdateProductDto): Promise<{
        id: string;
        title: string;
        description: string;
        salePrice: number;
        price: number;
        image: string;
        category_name: string;
        category: import("../product-category/product-category.entity").ProductCategory;
        created_at: Date;
        updated_at: Date;
    }>;
    createMany(body: CreateManyProductDto): Promise<Product[]>;
    findAll(page?: number, pageSize?: number, categoryName?: string, productName?: string, minPrice?: number, maxPrice?: number, onlySales?: boolean): Promise<{
        products: Product[];
        total: number;
    }>;
    findOne(id: string): Promise<Product>;
    delete(ids: string[]): Promise<{
        message: string;
    }>;
    deleteAll(): Promise<Product[]>;
}
