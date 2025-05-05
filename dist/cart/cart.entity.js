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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProduct = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../shared/base-entity");
const product_entity_1 = require("../product/product.entity");
const users_entity_1 = require("../users/users.entity");
let CartProduct = class CartProduct extends base_entity_1.BaseEntity {
};
exports.CartProduct = CartProduct;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartProduct.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartProduct.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], CartProduct.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", users_entity_1.Users)
], CartProduct.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'product_id', referencedColumnName: 'id' }),
    __metadata("design:type", product_entity_1.Product)
], CartProduct.prototype, "cartProduct", void 0);
exports.CartProduct = CartProduct = __decorate([
    (0, typeorm_1.Entity)()
], CartProduct);
//# sourceMappingURL=cart.entity.js.map