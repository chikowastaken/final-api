"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const app_service_1 = require("./app.service");
const users_entity_1 = require("./users/users.entity");
const product_entity_1 = require("./product/product.entity");
const cart_entity_1 = require("./cart/cart.entity");
const liked_product_entity_1 = require("./liked-product/liked-product.entity");
const product_category_entity_1 = require("./product-category/product-category.entity");
const purchase_entity_1 = require("./purchase/purchase.entity");
const auth_module_1 = require("./auth/auth.module");
const cart_module_1 = require("./cart/cart.module");
const product_module_1 = require("./product/product.module");
const product_category_module_1 = require("./product-category/product-category.module");
const liked_product_module_1 = require("./liked-product/liked-product.module");
const purchase_module_1 = require("./purchase/purchase.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5434,
                username: 'root',
                password: 'root',
                database: 'final',
                entities: [
                    users_entity_1.Users,
                    product_category_entity_1.ProductCategory,
                    product_entity_1.Product,
                    liked_product_entity_1.LikedProduct,
                    cart_entity_1.CartProduct,
                    purchase_entity_1.Purchase,
                ],
                synchronize: true,
                logging: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            product_module_1.ProductModule,
            product_category_module_1.ProductCategoryModule,
            liked_product_module_1.LikedProductModule,
            cart_module_1.CartModule,
            purchase_module_1.PurchaseModule,
        ],
        providers: [app_service_1.AppService],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map