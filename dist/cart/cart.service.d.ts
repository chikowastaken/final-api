import { Repository } from 'typeorm';
import { CartProduct } from './cart.entity';
import { CreateCartProduct } from './dtos/create-cart-product.dto';
export declare class CartService {
    private cartProductRepository;
    constructor(cartProductRepository: Repository<CartProduct>);
    create(userId: string, body: CreateCartProduct): Promise<CartProduct>;
    findOne(userId: string, productId: string): Promise<CartProduct>;
    findAll(userId: string): Promise<CartProduct[]>;
    delete(userId: string, productId?: string): Promise<CartProduct>;
    clear(userId: string): Promise<CartProduct[]>;
}
