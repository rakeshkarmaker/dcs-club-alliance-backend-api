import { BadRequestException, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'; //https://www.npmjs.com/package/bcrypt || npm install bcrypt

//v1.0.02- The primary purpose of this service is to handle password-related operations, such as hashing passwords and validating password strength.


@Injectable()
export class PasswordService {
  // methods related to password management here

  //Check password strength
    private checkPasswordStrength(password:string):boolean{
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
        return strongPasswordRegex.test(password);
    }

  //Hash a pass
  async hassPassword(password:string):Promise<string>{

    //Initailly, we check password strength here
    if(!this.checkPasswordStrength(password))throw new BadRequestException('Password does not meet strength requirements. It must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.');
    
    //Next, processding with hashing (using bcrypt)

    return bcrypt.hash(password, 9); // 9 is the salt rounds

    return "hashedPassword"; //dummy return
  }

  //Validate a hash password
  async validatePassword(givenPassword:string, hashedPassword:string):Promise<boolean>{
    return bcrypt.compare(givenPassword, hashedPassword);
  }
}
