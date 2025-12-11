
//v1.3.0- Implements the ITokenService for token generation and verification.

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    // Strategy implementation details would go here
    constructor() {
        const secret = process.env.JWT_SECRET!;
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
    }


    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}