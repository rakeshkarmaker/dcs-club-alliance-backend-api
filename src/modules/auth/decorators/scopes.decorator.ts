import { SetMetadata } from '@nestjs/common';
export const SCOPES_KEY = 'required_scopes';

//v3.2.1-  Added Scopes decorator to define required scopes for route handlers
export const Scopes = (...scopes: string[]) => SetMetadata(SCOPES_KEY, scopes);
