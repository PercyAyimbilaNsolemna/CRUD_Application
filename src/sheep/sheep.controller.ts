import { Controller, Get, Req } from '@nestjs/common';

import { Request } from 'express';

@Controller('sheep')
export class SheepController {
  @Get('/')
  finadAll(@Req() request: Request): string {
    return 'This action returns the root of the sheep controller';
  }

  //Adds a sub-route to the root sheep route using typeScript
  @Get('/black')
  getBlack(@Req() request: Request): string {
    return 'This action return all black sheep';
  }
}
