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
import { ActivitiesModule } from './modules/activity/activity.module';
import { LoginhistoryModule } from './modules/loginhistory/loginhistory.module';
import { MembershipsModule } from './modules/memberships/memberships.module';
import { NoticesModule } from './modules/notices/notices.module';
import { CommentsModule } from './modules/comments/comments.module';
import { EventcategoryModule } from './modules/eventcategory/eventcategory.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { FormsModule } from './modules/forms/forms.module';
import { FormresponsesModule } from './modules/formresponses/formresponses.module';
import { CertificatesModule } from './modules/certificates/certificates.module';
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
    MembershipsModule,
    NoticesModule,
    CommentsModule,
    EventcategoryModule,
    BlogsModule,
    FormsModule,
    FormresponsesModule,
    CertificatesModule,
  ], // Importing various feature modules to organize the application structure
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, PrismaService],
})
export class AppModule {}
