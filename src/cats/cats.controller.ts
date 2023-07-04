import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  //Get method for the cats home route
  @Get('/')
  getHome(): string {
    return 'This action returns all cats';
  }

  //Get method for the cats black route
  @Get('/black')
  getBlack(): string {
    return 'This action returns all the black cats';
  }

  //Get method for the cats white route
  @Get('/white')
  getWhite(): string {
    return 'This action returns all the white cats';
  }
}
