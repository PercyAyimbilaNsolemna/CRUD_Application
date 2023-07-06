import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { SheepController } from './sheep/sheep.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DogsController, SheepController],
  providers: [AppService],
})
export class AppModule {}
