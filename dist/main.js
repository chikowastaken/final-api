"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const bodyParser = require("body-parser");
const multer = require("multer");
const app_module_1 = require("./app.module");
const all_exceptions_filter_1 = require("./shared/all-exceptions-filter");
(0, dotenv_1.config)();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    const httpAdapterHost = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter(httpAdapterHost));
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        exceptionFactory: (errors) => {
            const result = errors.map((error) => ({
                property: error.property,
                message: error.constraints[Object.keys(error.constraints)[0]],
            }));
            return new common_1.BadRequestException(result);
        },
    }));
    const storage = multer.memoryStorage();
    const upload = multer({ storage });
    app.use(upload.single('image'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map