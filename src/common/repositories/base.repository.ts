
// src/common/interfaces/base.repository.ts
import { IRepository, type PrismaModuleDelegate } from '../interfaces/irepository.interface';
import { Injectable } from '@nestjs/common';


// Here, we define a BaseRepository class that implements the IRrepository interface.
// This class uses a PrismaModuleDelegate to perform CRUD operations on a Prisma model.
@Injectable()
export abstract class BaseRepository<T, CreateDto, UpdateDto> implements IRepository<T, CreateDto, UpdateDto> {
    
    constructor(protected readonly model:PrismaModuleDelegate) {} // The Prisma model delegate is injected via the constructor

    async create ( data: CreateDto): Promise<T> { // Creates a new entity
        return this.model.create({ data }); // Create the entity with the provided data
    }

    async update ( id:number, data : UpdateDto): Promise<T> { // Updates an existing entity by ID
        await this.exists(id); // Check if the entity exists

        return this.model.update({ where: { id }, data }); // Update the entity with the provided data
    }

    async findAll (): Promise<T[]> { // Retrieves all entities
        return this.model.findMany(); // Return all entities
    }
    
    async findOne ( id: number): Promise<T> { // Retrieves a single entity by ID
        const data = await this.model.findUnique({ where: { id } }); // Find the entity by ID
        if(!data) throw new Error(`Resource with ID ${id} not found`); // Throw an error if not found
        return data; // Return the found entity
    }

    async delete( id: number): Promise<void> { // Deletes an entity by ID
        await this.exists(id); // Delete the entity

        return this.model.delete({where:{id} }); // Return void
    }

    async exists ( id: number): Promise<boolean> { // Checks if an entity exists by ID
        const counts = await this.model.count({where:{id}}); // Find the entity by ID
        return counts > 0; // Return true if found, false otherwise
    }
    
}