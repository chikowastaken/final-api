import { Repository } from 'typeorm';
import { ProductCategory } from './product-category.entity';
import { CreateProductCategoryDto, CreateManyProductCategoryDto } from './dtos/create-product-category.dto';
export declare class ProductCategoryService {
    private productCategoryRepository;
    constructor(productCategoryRepository: Repository<ProductCategory>);
    create(body: CreateProductCategoryDto): Promise<ProductCategory>;
    createMany(body: CreateManyProductCategoryDto): Promise<ProductCategory[]>;
    findAll(): Promise<ProductCategory[]>;
    findOne(id: string): Promise<ProductCategory>;
    delete(id: string): Promise<ProductCategory>;
    deleteAll(): Promise<ProductCategory[]>;
}
