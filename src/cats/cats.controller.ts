import { Controller, Get, Body } from '@nestjs/common';

import { CreateCatDto, UpdateCatDto } from './create-cat.dto';

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
}
