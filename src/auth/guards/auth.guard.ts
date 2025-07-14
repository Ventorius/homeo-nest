import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Session, User } from 'better-auth/*';
import { Request } from 'express';
import { BetterAuthService } from '../better-auth.service';

interface RequestWithSession extends Request {
  session?: Session;
  user?: User;
}

export interface AuthGuardRequest extends Request {
  session?: Session;
  user?: User;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly betterAuthService: BetterAuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithSession>();

    const session = await this.betterAuthService.client.api.getSession({
      headers: new Headers(request.headers as Record<string, string>),
    });

    request.session = session?.session;
    return true;
  }
}
