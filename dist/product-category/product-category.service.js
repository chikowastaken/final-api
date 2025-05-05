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
exports.ProductCategoryService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const product_category_entity_1 = require("./product-category.entity");
let ProductCategoryService = class ProductCategoryService {
    constructor(productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }
    async create(body) {
        const productCategory = this.productCategoryRepository.create({
            ...body,
            image: 'data:image/png;base64,' + body.image,
        });
        return await this.productCategoryRepository.save(productCategory);
    }
    async createMany(body) {
        const productCategories = body.categories.map((category) => this.productCategoryRepository.create({
            ...category,
            image: 'data:image/png;base64,' + category.image,
        }));
        return await this.productCategoryRepository.save(productCategories);
    }
    async findAll() {
        return await this.productCategoryRepository.find();
    }
    async findOne(id) {
        const productCategory = await this.productCategoryRepository.findOne({
            where: { id },
        });
        if (!productCategory) {
            throw new Error('Product category not found');
        }
        return productCategory;
    }
    async delete(id) {
        const productCategory = await this.findOne(id);
        return await this.productCategoryRepository.remove(productCategory);
    }
    async deleteAll() {
        const productCategories = await this.findAll();
        return await this.productCategoryRepository.remove(productCategories);
    }
};
exports.ProductCategoryService = ProductCategoryService;
exports.ProductCategoryService = ProductCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_category_entity_1.ProductCategory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductCategoryService);
//# sourceMappingURL=product-category.service.js.map