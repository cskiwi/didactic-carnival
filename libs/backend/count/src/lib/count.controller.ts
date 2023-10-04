import { Controller, Get } from '@nestjs/common';

@Controller()
export class CountController {
  @Get()
  getData() {
    return {
      message: 'Welcome to count!',
    };
  }
}
