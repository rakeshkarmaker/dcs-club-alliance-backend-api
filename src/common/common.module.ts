import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from './services/password.service';
import { ValidationService } from './services/validation.service';
import { CheckUniqueDecorator } from './decorators/check-unique.decorator';

@Module({
    controllers: [],
    providers: [PrismaService, // Providing PrismaService to make it available for dependency injection in the common module
                PasswordService,
                ValidationService,
                CheckUniqueDecorator,
    ],
    exports: [  PrismaService, // Exporting PrismaService to make it available in other modules. Why? Because we might need to use PrismaService in other modules that import CommonModule. and we do not want every module to booting up its own prisma service instance, that willbe bad for performance! Like chaotic containers trying to run their own database connections/ own database pods!
                PasswordService,
                ValidationService,
                CheckUniqueDecorator,]
})
export class CommonModule {}
