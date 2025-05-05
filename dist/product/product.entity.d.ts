import { BaseEntity } from '../shared/base-entity';
import { ProductCategory } from 'src/product-category/product-category.entity';
export declare class Product extends BaseEntity {
    title: string;
    description: string;
    image: string;
    price: number;
    salePrice: number;
    category_name: string;
    category: ProductCategory;
}
