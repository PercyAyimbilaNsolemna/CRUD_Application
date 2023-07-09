import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  //Creates a constructor for the DogsService class
  constructor(private dogsService: DogsService) {}

  @Get('/')
  getHome(): string {
    return 'This action returns all dogs';
  }

  //Adds a get method that returns the name of the first dog in the dogs list in the dogsService
  @Get('/all')
  getAll() {
    this.dogsService.create({ name: 'Peace', age: 10, breed: 'Sokoto' });
    const dogs = this.dogsService.findAll();
    return dogs[0].name;
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
