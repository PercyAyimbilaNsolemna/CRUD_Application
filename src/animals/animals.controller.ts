import { Controller, Get, Post } from '@nestjs/common';

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
}
