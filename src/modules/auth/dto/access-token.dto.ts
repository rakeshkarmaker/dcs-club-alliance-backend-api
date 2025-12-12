
//v3.2.1- Access Token Payload DTO
export class AccessTokenDto {
  sub: number;  // user id!
  email: string; // user email in auth table
  userType: string; // user role/type like admin, member etc mentioned in auth table
  status!: string; // user status like active, inactive, banned etc mentioned in auth table
  scopes?: string[]; //v3.2.1- Scope Added.

  // deviceId: string;
  // ipAddress: string;
}
