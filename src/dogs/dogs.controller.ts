import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get('/')
  getHome(): string {
    return 'This action returns all dogs';
  }

  //Adds a get black sub-route to the dogs route
  @Get('/black')
  getBlack(): string {
    return 'This action returns all black dogs';
  }

  //Adds a get white sub-route to the dogs route
  @Get('white')
  getWhite(): string {
    return 'This action returns all white dogs';
  }

  //Adds a get blue subroute to the dogs route
  @Get('blue')
  getBlue(): string {
    return 'This action returns blue dogs';
  }
}
