import { BaseEntity } from 'src/shared/base-entity';
import { Product } from 'src/product/product.entity';
import { Users } from 'src/users/users.entity';
export declare class CartProduct extends BaseEntity {
    product_id: string;
    user_id: string;
    count: number;
    user: Users;
    cartProduct: Product;
}
