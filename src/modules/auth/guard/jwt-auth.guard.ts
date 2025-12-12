import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


//v3.2.1-  Created JwtAuthGuard to protect routes using JWT strategy
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}