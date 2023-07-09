import { Injectable } from '@nestjs/common';

import { Dog } from './interfaces/interfaces.interface';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  //Creates a method to add dog to the dogs
  create(dog: Dog) {
    this.dogs.push(dog);
  }

  //Creates a method to access all dogs in the dogs list
  findAll() {
    return this.dogs;
  }
}
