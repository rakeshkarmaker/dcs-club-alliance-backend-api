import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/formatresponse.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //v1.0.0 adding swagger
  const config = new DocumentBuilder()
    .setTitle('DCS Club Alliance Backend API')
    .setDescription('API description of the app')
    .setVersion('v1.0')
    .addTag('dcs')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apis', app, documentFactory, {
    jsonDocumentUrl: 'apis/swagger/json',
  });

  //V1.0.2- //Using the global validation pipe in main.ts, so no need to add here again!
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties that do not have any decorators
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
      transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
      transformOptions: {
        enableImplicitConversion: true, // Enable implicit type conversion based on the DTO types
      },
    }),
  );

  // v1.0.02 adding global interceptor for response formatting (DONT understand this line well)
  app.useGlobalInterceptors(
    new TransformInterceptor(), // Here, we are creating a new instance of the TransformInterceptor and passing it to the useGlobalInterceptors method of the NestJS application instance. This makes the interceptor apply to all incoming requests and outgoing responses in the application.
    new ClassSerializerInterceptor(app.get(Reflector)), // This interceptor is used to automatically serialize and deserialize class instances to and from plain JavaScript objects based on the decorators defined in the classes.
  );

  //v1.0.2- Setting the prefix value for all routes
  // app.setGlobalPrefix('api/v1'); // here we set a global prefix for all routes in the application. This means that all endpoints will be prefixed with /api/v1. For example, if you have a route defined as /users, it will be accessible at /api/v1/users.

  // Enable CORS (Cross-Origin Resource Sharing). This allows your API to be accessed from different domains. We will need this for our frontend application to communicate with this backend API.
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
