import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto, CreateManyProductCategoryDto } from './dtos/create-product-category.dto';
export declare class ProductCategoryController {
    private readonly productCategoryService;
    constructor(productCategoryService: ProductCategoryService);
    create(body: CreateProductCategoryDto): Promise<import("./product-category.entity").ProductCategory>;
    createMany(body: CreateManyProductCategoryDto): Promise<import("./product-category.entity").ProductCategory[]>;
    findAll(): Promise<import("./product-category.entity").ProductCategory[]>;
    deleteAll(): Promise<import("./product-category.entity").ProductCategory[]>;
    delete(id: string): Promise<import("./product-category.entity").ProductCategory>;
}
