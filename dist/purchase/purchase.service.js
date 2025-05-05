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
exports.PurchaseService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const purchase_entity_1 = require("./purchase.entity");
const cart_service_1 = require("../cart/cart.service");
let PurchaseService = class PurchaseService {
    constructor(purchaseRepository, cartService) {
        this.purchaseRepository = purchaseRepository;
        this.cartService = cartService;
    }
    async createPurchase(createPurchaseDto, userId) {
        console.log('🚀 ~ PurchaseService ~ userId:', userId);
        const { totalPrice, totalItems } = createPurchaseDto;
        const purchase = this.purchaseRepository.create({
            totalPrice,
            totalItems,
            user_id: userId,
        });
        const purchases = await this.purchaseRepository.save(purchase);
        await this.cartService.clear(userId);
        return purchases;
    }
    async getAllPurchases(userId) {
        return await this.purchaseRepository.find({ where: { user_id: userId } });
    }
    async getPurchaseById(id) {
        const purchase = await this.purchaseRepository.findOne({ where: { id } });
        if (!purchase) {
            throw new common_1.NotFoundException(`Purchase with ID ${id} not found`);
        }
        return purchase;
    }
    async deletePurchase(id) {
        const purchase = await this.getPurchaseById(id);
        return await this.purchaseRepository.remove(purchase);
    }
};
exports.PurchaseService = PurchaseService;
exports.PurchaseService = PurchaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(purchase_entity_1.Purchase)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        cart_service_1.CartService])
], PurchaseService);
//# sourceMappingURL=purchase.service.js.map