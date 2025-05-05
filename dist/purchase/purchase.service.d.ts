import { Repository } from 'typeorm';
import { Purchase } from './purchase.entity';
import { CreatePurchaseDto } from './dtos/purchase.dto';
import { CartService } from 'src/cart/cart.service';
export declare class PurchaseService {
    private purchaseRepository;
    private cartService;
    constructor(purchaseRepository: Repository<Purchase>, cartService: CartService);
    createPurchase(createPurchaseDto: CreatePurchaseDto, userId: string): Promise<Purchase>;
    getAllPurchases(userId: string): Promise<Purchase[]>;
    getPurchaseById(id: string): Promise<Purchase>;
    deletePurchase(id: string): Promise<Purchase>;
}
