"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const common_1 = require("@nestjs/common");
exports.Pagination = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const page = +request.query.page || 1;
    const pageSize = +request.query.pageSize || 10;
    return { page, pageSize };
});
//# sourceMappingURL=pagination.decorator.js.map