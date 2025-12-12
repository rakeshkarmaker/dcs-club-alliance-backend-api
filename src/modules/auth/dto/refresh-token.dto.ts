

//v3.2.1-  Added RefreshTokenDto to define the structure of refresh token payload
export class RefreshTokenDto {
  sub: number; // IserID
  email: string;
}
