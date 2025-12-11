import { Injectable } from "@nestjs/common";
import { ITokenService } from "../interfaces/itoken.interface";
import { JwtService } from "@nestjs/jwt";
import { AccessTokenDto } from "../dto/access-token.dto";
import { RefreshTokenDto } from "../dto/refresh-token.dto";


//v3.2.0- Implements the ITokenService for token generation and verification.

@Injectable()
export class TokenService implements ITokenService {
    constructor(private readonly jwt: JwtService) { }

    generateAccessToken(payload: AccessTokenDto): string {
        return this.jwt.sign(
            {
                sub: payload.userId,
                email: payload.email,
                role: payload.role,
                deviceId: payload.deviceId,
                ipAddress: payload.ipAddress,
                type: 'access',

            },
            {
                secret: process.env.JWT_ACCESS_SECRET,
                expiresIn: '1h'
            }
        );
    }
    generateRefreshToken(payload: RefreshTokenDto): string {
        return this.jwt.sign(
            {
                sub: payload.userId,
                deviceId: payload.deviceId,
                ipAddress: payload.ipAddress,
                type: 'refresh',
            },
            {
            secret: process.env.JWT_REFRESH_SECRET,
            expiresIn: '7d'
        }
        );
    }
    verifyAccessToken(token: string): any {
        return this.jwt.verify(token, {
            secret: process.env.JWT_ACCESS_SECRET
        });
    }
    verifyRefreshToken(token: string): any {
        return this.jwt.verify(token, {
            secret: process.env.JWT_REFRESH_SECRET
        });
    }
}
