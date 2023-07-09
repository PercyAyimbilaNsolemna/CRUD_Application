import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  //Creates new cat
  create(cat: Cat) {
    this.cats.push(cat);
  }

  //Returns all cats
  finAll(): Cat[] {
    return this.cats;
  }
}
