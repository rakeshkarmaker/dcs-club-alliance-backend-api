
//v3.2.1-  Implements+ Updated the ITokenService for token generation and verification.

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        const secret = process.env.JWT_SECRET!;
        if (!secret) {
            throw new Error('Cant Find Secret Key for JWT Strategy!');
        }
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
    }


    async validate(payload: any) {
        if (!payload || !payload.sub) {
            throw new UnauthorizedException('Invalid token payload');
        }
        if (payload.type !== 'access') throw new UnauthorizedException('Invalid token type');

        return {
            id: payload.sub,
            email: payload.email,
            userType: payload.userType,
            status: payload.status,
        };
    }
}