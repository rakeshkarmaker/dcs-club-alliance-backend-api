import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { SCOPES_KEY } from "../decorators/scopes.decorator";


// https://medium.com/@nurulislamrimon/role-based-access-control-in-nestjs-using-custom-permission-guard-c5807781a5e3
//v3.2.1-  Added ScopeGuard to enforce scope-based access control
@Injectable()
export class ScopeGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requireScope =
            this.reflector.getAllAndOverride<string[]>(SCOPES_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);
        if (!requireScope || requireScope.length === 0) return true;

        const { user } = context.switchToHttp().getRequest();
        if (!user) throw new ForbiddenException('No authenticated user');

        const userScopes = user.scopes || [];

        const hasAll = requireScope.every((scope) =>
            userScopes.includes(scope),
        );

        if (!hasAll) {
            throw new ForbiddenException(
                `Missing required permissions: ${requireScope.join(', ')}`,
            );
        }

        return true;
    }
}