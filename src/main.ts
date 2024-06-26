import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const microservice = app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: {
  //     port: 3000, // specify a different port here
  //   },
  // });
  // await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
