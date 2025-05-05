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
exports.ProductCategoryController = void 0;
const common_1 = require("@nestjs/common");
const product_category_service_1 = require("./product-category.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_product_category_dto_1 = require("./dtos/create-product-category.dto");
let ProductCategoryController = class ProductCategoryController {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    async create(body) {
        return this.productCategoryService.create(body);
    }
    async createMany(body) {
        return this.productCategoryService.createMany(body);
    }
    async findAll() {
        return this.productCategoryService.findAll();
    }
    async deleteAll() {
        return this.productCategoryService.deleteAll();
    }
    async delete(id) {
        return this.productCategoryService.delete(id);
    }
};
exports.ProductCategoryController = ProductCategoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_category_dto_1.CreateProductCategoryDto]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('many'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_category_dto_1.CreateManyProductCategoryDto]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "createMany", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)('delete-all'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "deleteAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductCategoryController.prototype, "delete", null);
exports.ProductCategoryController = ProductCategoryController = __decorate([
    (0, common_1.Controller)('product-category'),
    __metadata("design:paramtypes", [product_category_service_1.ProductCategoryService])
], ProductCategoryController);
//# sourceMappingURL=product-category.controller.js.map