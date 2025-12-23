

//v3.2.1-  Added RefreshTokenDto to define the structure of refresh token payload
export class RefreshTokenDto {
  readonly sub!: number;
  readonly email!: string;
}
