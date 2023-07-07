import { Controller, Get, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';

@Controller('sheep')
export class SheepController {
  @Get('/')
  finadAll(@Req() request: Request, @Res() response: Response): string {
    return 'This action returns the root of the sheep controller';
  }

  //Adds a sub-route to the root sheep route using typeScript
  @Get('/black')
  getBlack(@Req() request: Request): string {
    console.log(request.body);
    return 'This action returns all black sheep';
  }
}
