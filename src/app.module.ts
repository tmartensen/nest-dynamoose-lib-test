import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamooseModule } from "nestjs-dynamoose";
import { BarController } from './bar/bar.controller';
import { BarService } from './bar/bar.service';
import { BarModule } from './bar/bar.module';
import * as dynamoose from 'dynamoose';

@Module({
  imports: [
    DynamooseModule.forRootAsync({
      useFactory: () => {
        dynamoose.logger.providers.set(console);
        return {
          aws: {
            region: 'localhost',
            accessKeyId: '',
            secretAccessKey: '',
          },
          local: true,
          model: {
            create: true,
          },
        };
      },
    }),
    BarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
