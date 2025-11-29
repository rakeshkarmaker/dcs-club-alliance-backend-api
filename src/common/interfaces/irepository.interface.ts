export interface IRepository<T, CreateDto, UpdateDto> {
  // Generic Repository Interface
  // T is the type of the entity returned
  // CreateDto is the type of the data used to create a new entity
  // UpdateDto is the type of the data used to update an existing entity
  create(data: CreateDto): Promise<T>; // Create a new entity: returns a Promise that resolves to the created entity
  update(id: number, data: UpdateDto): Promise<T>; // Update an existing entity by ID: returns a Promise that resolves to the updated entity
  findAll(): Promise<T[]>; // Retrieve all entities: returns a Promise that resolves to an array of entities
  findOne(id: number): Promise<T>; // Retrieve a single entity by ID: returns a Promise that resolves to the entity
  delete(id: number): Promise<void>; // Delete an entity by ID: returns a Promise that resolves to void
  exists(id: number): Promise<boolean>; // Check if an entity exists by ID: returns a Promise that resolves to a boolean
}

// Prisma Module Delegate Type => a type that defines the basic CRUD operations for a Prisma model
export type PrismaModuleDelegate = {
  create(arge: any): Promise<any>;
  update(arge: any): Promise<any>;
  findMany(arge?: any): Promise<any[]>;
  findUnique(arge: any): Promise<any>;
  count(arge?: any): Promise<number>;
  delete(arge: any): Promise<any>;
};
