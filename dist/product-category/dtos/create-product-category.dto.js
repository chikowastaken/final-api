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
exports.CreateManyProductCategoryDto = exports.CreateProductCategoryDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProductCategoryDto {
}
exports.CreateProductCategoryDto = CreateProductCategoryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBase64)(),
    __metadata("design:type", String)
], CreateProductCategoryDto.prototype, "image", void 0);
class CreateManyProductCategoryDto {
}
exports.CreateManyProductCategoryDto = CreateManyProductCategoryDto;
//# sourceMappingURL=create-product-category.dto.js.map