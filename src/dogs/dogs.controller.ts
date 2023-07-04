import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get('/')
  getHome(): string {
    return 'This action returns all dogs';
  }
}
