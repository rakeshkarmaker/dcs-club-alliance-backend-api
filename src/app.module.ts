import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ClubsModule } from './modules/clubs/clubs.module';
import { EventsModule } from './modules/events/events.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { ActivitiesModule } from './modules/activities/activities.module';
import { LoginhistoryModule } from './modules/loginhistory/loginhistory.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    CommonModule, // Importing CommonModule to make its providers available throughout the application
    AuthModule,
    UsersModule,
    ClubsModule,
    EventsModule,
    PrismaModule,
    CommonModule,
    ActivitiesModule,
    LoginhistoryModule,
  ], // Importing various feature modules to organize the application structure
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, PrismaService],
})
export class AppModule {}
