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
exports.LikedProductController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_liked_product_dto_1 = require("./dtos/create-liked-product.dto");
const liked_product_service_1 = require("./liked-product.service");
let LikedProductController = class LikedProductController {
    constructor(likedProductsService) {
        this.likedProductsService = likedProductsService;
    }
    findAll(req) {
        return this.likedProductsService.findAll(req.user.id);
    }
    create(body, req) {
        return this.likedProductsService.create(req.user.id, body);
    }
    delete(productId, req) {
        return this.likedProductsService.delete(req.user.id, productId);
    }
};
exports.LikedProductController = LikedProductController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LikedProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_liked_product_dto_1.CreateLikedProductDto, Object]),
    __metadata("design:returntype", void 0)
], LikedProductController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LikedProductController.prototype, "delete", null);
exports.LikedProductController = LikedProductController = __decorate([
    (0, common_1.Controller)('liked-products'),
    __metadata("design:paramtypes", [liked_product_service_1.LikedProductService])
], LikedProductController);
//# sourceMappingURL=liked-product.controller.js.map