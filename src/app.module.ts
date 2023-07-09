import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { SheepController } from './sheep/sheep.controller';
import { AnimalsController } from './animals/animals.controller';
import { GoatController } from './goat/goat.controller';
import { LionsController } from './lions/lions.controller';
import { CatsService } from './cats/cats.service';
import { DogsService } from './dogs/dogs.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DogsController, SheepController, AnimalsController, GoatController, LionsController],
  providers: [AppService, CatsService, DogsService],
})
export class AppModule {}
