


//v3.2.0- Defines the ITokenService interface for token generation and verification.

import { AccessTokenDto } from "../dto/access-token.dto";
import { RefreshTokenDto } from "../dto/refresh-token.dto";


export interface ITokenService {
  generateAccessToken(payload: AccessTokenDto): string;
  generateRefreshToken(payload: RefreshTokenDto): string;

  verifyAccessToken(token: string): any;
  verifyRefreshToken(token: string): any;
}
