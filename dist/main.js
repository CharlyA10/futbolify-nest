"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const morgan = require("morgan");
const constants_1 = require("./constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(morgan('dev'));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const configService = app.get(config_1.ConfigService);
    app.enableCors(constants_1.CORS);
    app.setGlobalPrefix('api');
    await app.listen(configService.get('PORT'));
    console.log(`Aplicación corriendo en: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map