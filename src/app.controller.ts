import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/number')
  randomNumberGenerator(): number[] {
    return this.appService.getRandomNumber();
  }

  @Get('/word')
  randomWordGenerator(): string {
    return this.appService.getRandomWord();
  }
}
