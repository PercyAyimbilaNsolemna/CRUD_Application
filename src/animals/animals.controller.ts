import { Controller, Get, Post, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';

@Controller('animals')
export class AnimalsController {
  //Adds a get route for the root of the animals route
  @Get('/')
  getHome(): string {
    return 'This action returns all the animals';
  }

  //Adds a POST route for the root fo the animals
  @Post('/')
  postHome(): string {
    return 'This action adds animal(s) to the root route';
  }

  //Adds a GET black sub-route to the animals route
  @Get('/black')
  getBlack(): string {
    return 'This action returns all black animals';
  }

  //Adds a POST black sub-route to the animals route
  @Post('/black')
  postBlack(): string {
    return 'This action adds black animal(s) to the black animals sub-route';
  }

  //Adds a GET white sub-route for white to the animals route using express
  @Get('/white')
  getWhite(@Req() request: Request, @Res() response: Response) {
    response.send('This action returns all white animals');
  }

  //Adds a POST white sub-route to the animals route using express
  @Post('/white')
  postWhite(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
  }
}
