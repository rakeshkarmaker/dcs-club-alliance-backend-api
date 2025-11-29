// import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
// import { PrismaPg } from '@prisma/adapter-pg';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
//     constructor() {

//         const connectionString = `${process.env.DATABASE_URL}`;
//         if (!connectionString) throw new Error('DATABASE_URL environment variable is not set');
//         const adapter = new PrismaPg({connectionString});
//         // const prisma = new PrismaClient({adapter});
//         super({adapter});
    
    
//     }

    
//     async onModuleInit() {
//         await this.$connect(); // Connect to the database when the module is initialized
//         console.log('Prisma service connected to the database');
        
//     }

//     async onModuleDestroy() {
//         await this.$disconnect(); // Disconnect from the database when the module is destroyed
//         console.log('Prisma service disconnected from the database');
//     }
// }

// src/prisma/prisma.service.ts (or wherever your service is)

import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
// 👈 ADD THIS IMPORT for the underlying driver
import { Pool } from 'pg'; 
// You might also need this if you rely on this file to load the .env
import 'dotenv/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const connectionString = process.env.DATABASE_URL;
        if (!connectionString) {
          throw new Error('DATABASE_URL environment variable is not set');
        }

        // 1. Create the connection pool using the 'pg' driver
        const pool = new Pool({ connectionString });

        // 2. Pass the Pool instance to the PrismaPg adapter
        //    (The adapter now handles translating Prisma queries for the Pool)
        const adapter = new PrismaPg(pool);
        
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
        console.log('Prisma service connected to the database');
    }

    async onModuleDestroy() {
        await this.$disconnect();
        console.log('Prisma service disconnected from the database');
    }
}