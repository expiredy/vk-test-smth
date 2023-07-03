import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const API_PORT = process.env.API_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.getGlobalPrefix(process.env.API_PREFIX);
  await app.listen(API_PORT, () => {console.log("Started and ready on http://localhost/${API_PORT}")});
}
bootstrap();