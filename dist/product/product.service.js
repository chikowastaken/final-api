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
exports.ProductService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const product_entity_1 = require("./product.entity");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(body) {
        const product = this.productRepository.create({
            ...body,
            image: 'data:image/png;base64,' + body.image,
        });
        return await this.productRepository.save(product);
    }
    async update(body) {
        const product = await this.findOne(body.id);
        const { image, ...productData } = body;
        const updatedProduct = { ...product, ...productData };
        if (image) {
            updatedProduct.image = 'data:image/png;base64,' + image;
        }
        await this.productRepository.update(product.id, updatedProduct);
        return updatedProduct;
    }
    async createMany(body) {
        const products = body.products.map((product) => this.productRepository.create({
            ...product,
            image: 'data:image/png;base64,' + product.image,
        }));
        return await this.productRepository.save(products);
    }
    async findAll(page = 1, pageSize = 10, categoryName, productName, minPrice, maxPrice, onlySales) {
        const query = this.productRepository.createQueryBuilder('product');
        if (categoryName) {
            query.where('product.category_name = :categoryName', { categoryName });
        }
        if (productName) {
            query.andWhere('product.title LIKE :productName', {
                productName: `%${productName.toLowerCase()}%`,
            });
        }
        if (minPrice) {
            query.andWhere('CASE WHEN product.salePrice IS NOT NULL THEN product.salePrice ELSE product.price END >= :minPrice', { minPrice });
        }
        if (maxPrice) {
            query.andWhere('CASE WHEN product.salePrice IS NOT NULL THEN product.salePrice ELSE product.price END <= :maxPrice', { maxPrice });
        }
        if (onlySales) {
            query.andWhere('product.salePrice IS NOT NULL');
        }
        const [products, total] = await query
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
        return { products, total };
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product) {
            throw new common_1.NotFoundException('product not found');
        }
        return product;
    }
    async delete(ids) {
        if (!ids || ids.length === 0) {
            throw new common_1.NotFoundException('Please provide an array of product IDs to delete.');
        }
        const productsToDelete = await this.productRepository.find({
            where: { id: (0, typeorm_1.In)(ids) },
        });
        if (productsToDelete.length !== ids.length) {
            throw new common_1.NotFoundException('Some products with provided IDs were not found.');
        }
        await this.productRepository.remove(productsToDelete);
        return { message: 'Products deleted successfully.' };
    }
    async deleteAll() {
        const products = await this.productRepository.find();
        return await this.productRepository.remove(products);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map