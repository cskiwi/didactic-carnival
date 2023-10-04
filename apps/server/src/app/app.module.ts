import { Module } from '@nestjs/common';
import { CountModule } from '@royal-wolf/count';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const productionModules = process.env.NODE_ENV
  ? [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'client'),
        exclude: ['/api*'],
      }),
    ]
  : [];

@Module({
  imports: [...productionModules, CountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
