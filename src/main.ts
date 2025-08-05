import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port', 3000);

  const config = new DocumentBuilder()
    .setTitle('E-commerce API')
    .setDescription('API documentation for the E-commerce application')
    .setVersion('1.0')
    .addTag('e-commerce')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(port);
  console.log(`🚀 E-commerce API is running on: http://localhost:${port}`);
  console.log(
    `📚 API Documentation available at: http://localhost:${port}/api`,
  );
}

void bootstrap();
