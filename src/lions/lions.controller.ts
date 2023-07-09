import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

import { Response } from 'express';

@Controller('lions')
export class LionsController {
  @Get('/')
  getLion(@Res() res: Response) {
    console.log(HttpStatus.OK);
    res.status(HttpStatus.CREATED).send('Thanks for using our services');
  }
}
