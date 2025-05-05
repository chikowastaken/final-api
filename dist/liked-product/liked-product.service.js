"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikedProductService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const liked_product_entity_1 = require("./liked-product.entity");
let LikedProductService = class LikedProductService {
    constructor(likedProductRepository) {
        this.likedProductRepository = likedProductRepository;
    }
    async create(userId, body) {
        const likedProduct = this.likedProductRepository.create({
            user_id: userId,
            product_id: body.product_id,
        });
        return await this.likedProductRepository.save(likedProduct);
    }
    async findAll(userId) {
        const likedProducts = await this.likedProductRepository.find({
            where: { user_id: userId },
        });
        return likedProducts;
    }
    async findOne(userId, productId) {
        const likedProduct = await this.likedProductRepository.findOne({
            where: { user_id: userId, id: productId },
        });
        if (!likedProduct) {
            throw new common_1.NotFoundException('liked product not found');
        }
        return likedProduct;
    }
    async delete(userId, productId) {
        const likedProduct = await this.findOne(userId, productId);
        return await this.likedProductRepository.remove(likedProduct);
    }
};
exports.LikedProductService = LikedProductService;
exports.LikedProductService = LikedProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(liked_product_entity_1.LikedProduct)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LikedProductService);
//# sourceMappingURL=liked-product.service.js.map