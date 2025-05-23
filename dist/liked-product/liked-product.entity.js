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
exports.LikedProduct = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../shared/base-entity");
const product_entity_1 = require("../product/product.entity");
const users_entity_1 = require("../users/users.entity");
let LikedProduct = class LikedProduct extends base_entity_1.BaseEntity {
};
exports.LikedProduct = LikedProduct;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LikedProduct.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LikedProduct.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'product_id', referencedColumnName: 'id' }),
    __metadata("design:type", product_entity_1.Product)
], LikedProduct.prototype, "likedProduct", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", users_entity_1.Users)
], LikedProduct.prototype, "likedByUser", void 0);
exports.LikedProduct = LikedProduct = __decorate([
    (0, typeorm_1.Entity)()
], LikedProduct);
//# sourceMappingURL=liked-product.entity.js.map