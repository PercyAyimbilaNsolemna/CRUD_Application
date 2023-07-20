import { Controller, Get, Body } from '@nestjs/common';

import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  //Creates a constructor for the CatsService class
  constructor(private catsService: CatsService) {}

  //Get method for the cats home route
  @Get('/')
  getHome(): string {
    return 'This action returns all cats';
  }

  //Creates a Get method retrieve all cats in the catsService/provider
  /*
  @Get('/all')
  async getAllCats() {
    this.catsService.create({ name: 'Old', age: 2, breed: 'NEXT' });
    const cats = this.catsService.finAll();
    return cats;
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

  //Get dto method for the cats route. Exports the creaqteCatDto class
  @Get('/dto')
  getDto(@Body() craeteCatDto: CreateCatDto) {
    console.log(craeteCatDto);
    return 'This method returns the DTO in the cats dto';
  }

  //Adds a sub-route in the dto that updates the dto. Trying to test exporting different classes from a file
  @Get('/dto/update')
  getUpdateDto(@Body() updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return 'This page is meant to update the cat DTO';
  }
  */
}
