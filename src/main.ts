import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  
  // Safe defaults to eliminate undefined
  const port = config.get<number>('PORT') ?? 3000;
  const apiPrefix = config.get<string>('API_PREFIX') ?? 'api';
  const corsOriginRaw = config.get<string>('CORS_ORIGIN') ?? '';

  app.setGlobalPrefix(apiPrefix);

  // Build an array; empty string => []
  const corsOrigins = corsOriginRaw
    ? corsOriginRaw.split(',').map(o => o.trim()).filter(Boolean)
    : [];

  app.enableCors({
    origin: corsOrigins,
    credentials: true,
  });

    const swaggerConfig = new DocumentBuilder()
    .setTitle('E-Commerce')
    .setDescription('E-Commerce API description')
    .setVersion('1.0')
    .addTag('E-Commerce')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig );
  SwaggerModule.setup('api', app, documentFactory);


  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`Application running on: http://localhost:${port}/${apiPrefix}`);
}
bootstrap();
