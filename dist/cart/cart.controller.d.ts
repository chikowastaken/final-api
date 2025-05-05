import { CartService } from './cart.service';
import { CreateCartProduct } from './dtos/create-cart-product.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(req: any): Promise<import("./cart.entity").CartProduct[]>;
    create(body: CreateCartProduct, req: any): Promise<import("./cart.entity").CartProduct>;
    delete(req: any, productId?: string): Promise<import("./cart.entity").CartProduct>;
    clear(req: any): Promise<import("./cart.entity").CartProduct[]>;
}
