import { Controller, Get, Param } from '@nestjs/common';

@Controller('goat')
export class GoatController {
  //Adds a root route for the goat controller
  @Get('/')
  getHome(): string {
    return 'This action returns the root route of the goat controller';
  }

  //Get route for any param on the goat root route
  @Get(':id')
  getParam(@Param() params: any): string {
    console.log(params);
    return `This action returns the ${params.id} sub-route in the goat controller`;
  }
}
