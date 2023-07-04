import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!. Wecome to my first Nest js web app, I will surely go high by grace';
  }
}
