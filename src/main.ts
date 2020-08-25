import { NestFactory } from '@nestjs/core';
import { AppModule } from './module';
import 'reflect-metadata';


const PORT = process.env.PORT;

const enableOptions = app => {
  app.enableCors();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['warn', 'error'] });
  enableOptions(app);
  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
