import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';


@Global()  // Making the module global to avoid multiple imports in other modules and its mandarory for singleton services like PrismaService or the database connection
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
    imports: [PrismaModule],
})
export class PrismaModule {}
