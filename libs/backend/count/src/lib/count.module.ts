import { Module } from '@nestjs/common';
import { CountController } from './count.controller';

@Module({
  controllers: [CountController],
  providers: [],
  exports: [],
})
export class CountModule {}
