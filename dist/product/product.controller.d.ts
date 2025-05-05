import { ProductService } from './product.service';
import { CreateProductDto, CreateManyProductDto, UpdateProductDto } from './dtos/create-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(body: CreateProductDto): Promise<import("./product.entity").Product>;
    createMany(body: CreateManyProductDto): Promise<import("./product.entity").Product[]>;
    findAll(categoryName: string, productName: string, minPrice: number, maxPrice: number, onlySales: boolean, pagination: {
        page: number;
        pageSize: number;
    }): Promise<{
        products: import("./product.entity").Product[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./product.entity").Product>;
    deleteAll(): Promise<import("./product.entity").Product[]>;
    delete(ids: string[]): Promise<{
        message: string;
    }>;
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
}
