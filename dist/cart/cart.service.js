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
exports.CartService = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const cart_entity_1 = require("./cart.entity");
let CartService = class CartService {
    constructor(cartProductRepository) {
        this.cartProductRepository = cartProductRepository;
    }
    async create(userId, body) {
        let cartProduct = await this.cartProductRepository.findOne({
            where: {
                user_id: userId,
                product_id: body.product_id,
            },
        });
        if (cartProduct) {
            cartProduct.count += 1;
        }
        else {
            cartProduct = this.cartProductRepository.create({
                user_id: userId,
                product_id: body.product_id,
                count: 1,
            });
        }
        return await this.cartProductRepository.save(cartProduct);
    }
    async findOne(userId, productId) {
        const cartProduct = await this.cartProductRepository.findOne({
            where: { user_id: userId, id: productId },
        });
        if (!cartProduct) {
            throw new common_1.NotFoundException('cart product not found');
        }
        return cartProduct;
    }
    async findAll(userId) {
        const cartProducts = await this.cartProductRepository.find({
            where: { user_id: userId },
        });
        return cartProducts;
    }
    async delete(userId, productId) {
        let cartProduct = await this.findOne(userId, productId);
        if (cartProduct.count === 1) {
            await this.cartProductRepository.remove(cartProduct);
        }
        else {
            cartProduct.count -= 1;
            await this.cartProductRepository.save(cartProduct);
        }
        return cartProduct;
    }
    async clear(userId) {
        const cartProducts = await this.findAll(userId);
        await this.cartProductRepository.remove(cartProducts);
        return cartProducts;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cart_entity_1.CartProduct)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CartService);
//# sourceMappingURL=cart.service.js.map