import { Repository } from 'typeorm';
import { LikedProduct } from './liked-product.entity';
import { CreateLikedProductDto } from './dtos/create-liked-product.dto';
export declare class LikedProductService {
    private likedProductRepository;
    constructor(likedProductRepository: Repository<LikedProduct>);
    create(userId: string, body: CreateLikedProductDto): Promise<LikedProduct>;
    findAll(userId: string): Promise<LikedProduct[]>;
    findOne(userId: string, productId: string): Promise<LikedProduct>;
    delete(userId: string, productId: string): Promise<LikedProduct>;
}
