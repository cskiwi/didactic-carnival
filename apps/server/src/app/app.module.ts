import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  imports: [...productionModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
