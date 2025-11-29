import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// nestjs documentation for custom validators
// https://github.com/typestack/class-validator?tab=readme-ov-file#custom-validation-classes

@ValidatorConstraint({ name: 'CheckUnique', async: true })
@Injectable()
export class CheckUniqueDecorator implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    // uniqueness check logic
    const [model, prop = args.property] = args.constraints;

    // Converting the delegate name properly
    const delegate = (this.prisma as any)[model.toLowerCase()];

    // Guard: if the model  here is invalid
    if (!delegate || typeof delegate.findFirst !== 'function') {
      throw new Error(`Invalid Prisma model name "${model}".Use lowercase.`);
    }

    const record = await delegate.findFirst({
      where: { [prop]: value },
    });
    return !record; // return true if value is unique
  }

  defaultMessage?(args: ValidationArguments): string {
    const [mdoel, field] = args.constraints;
    return `${field} must be unique. The value '${args.value}' is already taken.`;
  }
}
