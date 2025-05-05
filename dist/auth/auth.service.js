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
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const auth_constants_1 = require("./auth.constants");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async hashPassword(password) {
        return await (0, bcryptjs_1.hash)(password, 10);
    }
    async comparePassword(inputPassword, userPassword) {
        return await (0, bcryptjs_1.compare)(inputPassword, userPassword);
    }
    async validateUser(email, password) {
        const user = await this.usersService.findOne({ email });
        const passwordEqual = await this.comparePassword(password, user.password);
        if (passwordEqual) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async createTokens(user) {
        const payload = {
            email: user.email,
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            phone_number: user.phone_number,
            role: user.role,
        };
        const tokens = {
            access_token: this.jwtService.sign(payload),
            refresh_token: this.jwtService.sign(payload, {
                expiresIn: '4w',
                secret: auth_constants_1.jwtConstants.refreshTokenSecret,
            }),
        };
        await this.usersService.updateRefreshToken({
            id: user.id,
            refresh_token: tokens.refresh_token,
        });
        return tokens;
    }
    async updateTokens(data) {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        let decodedToken;
        try {
            decodedToken = this.jwtService.verify(data.refresh_token, {
                secret: auth_constants_1.jwtConstants.refreshTokenSecret,
            });
        }
        catch {
            throw new common_1.HttpException({ message: 'invalid refresh_token' }, common_1.HttpStatus.BAD_REQUEST);
        }
        if (decodedToken.exp < currentTimestamp) {
            throw new common_1.HttpException({ message: 'refresh_token is expired' }, common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.usersService.findOne({ id: decodedToken.id });
        if (user.refresh_token === data.refresh_token) {
            return this.createTokens(user);
        }
        else {
            throw new common_1.HttpException({ message: 'invalid refresh_token' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async logout(id) {
        return await this.usersService.updateRefreshToken({
            id,
            refresh_token: null,
        });
    }
    async localRegister(data) {
        const { email, password, first_name, last_name, phone_number } = data;
        const hashedPassword = await this.hashPassword(password);
        const user = await this.usersService.create({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            phone_number,
        });
        if (!user) {
            throw new common_1.HttpException('create user error', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.createTokens(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map