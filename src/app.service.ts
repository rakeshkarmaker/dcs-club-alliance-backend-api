import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Collegiatians! Welcome to DCS Club Alliance Backend API! If you are a running student tha means you are ahead of your time! 🚀 As a senior cant be more proud of you. Keep learning!';
  }
}
  