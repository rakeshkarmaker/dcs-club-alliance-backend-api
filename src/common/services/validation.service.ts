// //v1.0.03 Share the Prisma validation service across the application, such as the UniqueCheck Decorator

// // and any future validation services that may be added later.
// //BTW, this is a sample of industry grade code structure for NestJS with Prisma integration.

// src/common/validation/validation.service.ts
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ValidationService {
  constructor(private readonly prisma: PrismaService) {}

  async isUniqueConstraint(
    model: keyof PrismaService,
    field: string,
    value: any,
    errorMessage?: string,
    excludeId?: number,
  ): Promise<boolean> {
    const validData: any = { [field]: value };
    if (excludeId !== undefined) validData['id'] = { not: excludeId };

    const modelClient = this.prisma[model] as any;
    const existingRecord = await modelClient.findFirst({ where: validData });

    if (existingRecord)
      throw new ConflictException(
        errorMessage ||
          `The ${field} must be unique in ${model.toString()} model.`,
      );

    return true;
  }

  async ValidateEntityExists(
    model: keyof PrismaService,
    id: number,
    errorMessage?: string,
  ): Promise<boolean> {
    const modelClient = this.prisma[model] as any;
    const entity = await modelClient.findUnique({ where: { id } });

    if (!entity)
      throw new NotFoundException(
        errorMessage || `The ${model.toString()} with ID ${id} does not exist.`,
      );

    return true;
  }

  async ValidateStudentProfileExists(
    userId: number,
    schoolId: number,
    errorMessage?: string,
  ): Promise<boolean> {
    const studentProfile = await this.prisma.studentInfo.findUnique({
      where: { userId },
    });

    if (!studentProfile)
      throw new NotFoundException(
        errorMessage ||
          `The Student Profile for User ID ${userId} does not exist.`,
      );

    return true;
  }

  async ValidateClubMembership(
    userId: number,
    clubId: number,
    errorMessage?: string,
  ): Promise<boolean> {
    await this.ValidateEntityExists(
      'club',
      clubId,
      `The Club with ID ${clubId} does not exist.`,
    );

    const membership = await this.prisma.membership.findFirst({
      where: { userId, clubId },
    });

    if (membership)
      throw new NotFoundException(
        errorMessage ||
          `The User with ID ${userId} is already a member of Club ID ${clubId}.`,
      );

    return true;
  }
}
// // Previous Version v1.0.01 Below:

// import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
// import { PrismaService } from "src/prisma/prisma.service";

// @Injectable()
// export class ValidationService{
//     //Here, we can Add common validation methods here in the future
//     constructor(private readonly prisma:PrismaService){} // Dependency Injection of Prisma Client -,-

//     // Here, the puropose of this method is to perform checks weather a field (ex: email, username) is unique/already exists in the model or not.
//     async isUniqueConstraint( model: keyof PrismaClient, field: string, value:any, errorMessage?:string, excludeId?:number): Promise<boolean> {
//         //The parameters are:
//         // model: The Prisma model to check against (ex: 'User')
//         // field: The field to check for uniqueness (ex: 'email')
//         // value: The value to check for uniqueness against
//         // errorMessage: Optional custom error message
//         // excludeId: Optional ID to exclude from the check (useful for updates)

//         const validData :any= {[field]:value}; // Dynamic field assignment for Prisma query
//         // if(excludeId) validData['id'] = { not: excludeId}; // Exclude the record with the given ID!
//         if (excludeId !== undefined) validData['id'] = { not: excludeId }; //v2- Exclude the record with the given ID! (Better check for undefined)

//         const modelClient = this.prisma[model] as any; // Dynamic model access from Prisma Client

//         const existingRecord = await modelClient.findFirst( {where: validData} );
//         if (existingRecord) throw new ConflictException(errorMessage || `The ${field} here must be unique in ${model.toString()} model.`);

//         return true; // Placeholder for actual implementation
//     }

//     // Check if an entity(model) exists in the database based on the id basically.
//     async ValidateEntityExists(model: keyof PrismaClient, id:number, errorMessage?:string): Promise<boolean> {
//         const modelClient = this.prisma[model] as any; // Dynamic model access from Prisma Client
//         // const entityCounts = await modelClient.count( {where: {id}} );
//         const entity = await modelClient.findUnique({ where: { id } });//v2- Using findUnique to check existence by ID faster

//         if (!entity) throw new NotFoundException(errorMessage || `The ${model.toString()} with ID ${id} does not exist.`);
//         return true;
//     }

//     //checks if a student profile exists or not based on userId
//     async ValidateStudentProfileExists(userId:number,schoolId:number, errorMessage?:string): Promise<boolean> {
//         // First,we validate if the school exists
//         // await this.ValidateEntityExists('school', schoolId, `The School with ID ${schoolId} does not exist.`);

//         //Secondly,we check if the student profile exists for the given userId

//         const studentProfile = await this.prisma.studentInfo.findUnique( {where: {userId}} );
//         // Here, we are checking if the student profile does NOT exist, hence the exception is thrown if it is found to be null
//         if (!studentProfile) throw new NotFoundException(errorMessage || `The Student Profile for User ID ${userId} does not exist.`);

//         // //Lastly, We verify if the student profile belongs to the specified school
//         // if (studentProfile !== schoolId) {
//         //     throw new NotFoundException(errorMessage || `The Student Profile for User ID ${userId} does not belong to School ID ${schoolId}.`);
//         // }
//         return true; // If all checks pass, return true
//     }

//     async ValidateClubMembership(userId:number, clubId:number, errorMessage?:string): Promise<boolean> {
//         // Check if the club exists
//         await this.ValidateEntityExists('club', clubId, `The Club with ID ${clubId} does not exist.`);
//         // Check if the user is a member of the club
//         const membership = await this.prisma.membership.findFirst( {where: {userId, clubId}} );
//         if (membership) throw new NotFoundException(errorMessage || `The User with ID ${userId} is already a member of Club ID ${clubId}.`);
//         return true; // If all checks pass, return true
//     }

// }
