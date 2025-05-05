import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dtos/purchase.dto';
import { Purchase } from './purchase.entity';
export declare class PurchaseController {
    private readonly purchaseService;
    constructor(purchaseService: PurchaseService);
    createPurchase(createPurchaseDto: CreatePurchaseDto, req: any): Promise<Purchase>;
    getAllPurchases(req: any): Promise<Purchase[]>;
    getPurchaseById(id: string): Promise<Purchase>;
    deletePurchase(id: string): Promise<Purchase>;
}
