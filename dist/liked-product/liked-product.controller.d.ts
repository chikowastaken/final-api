import { CreateLikedProductDto } from './dtos/create-liked-product.dto';
import { LikedProductService } from './liked-product.service';
export declare class LikedProductController {
    private readonly likedProductsService;
    constructor(likedProductsService: LikedProductService);
    findAll(req: any): Promise<import("./liked-product.entity").LikedProduct[]>;
    create(body: CreateLikedProductDto, req: any): Promise<import("./liked-product.entity").LikedProduct>;
    delete(productId: string, req: any): Promise<import("./liked-product.entity").LikedProduct>;
}
