import { Module } from '@nestjs/common';
import { DynamooseModule } from "nestjs-dynamoose";
import { BarController } from "./bar.controller";
import { BarService } from "./bar.service";
import { BarDAO, BarSchema } from "dynamoose-schema-lib";
// import {BarSchema} from "./bar.schema";

@Module({
  imports: [DynamooseModule.forFeature([{ name: 'Bar', schema: BarSchema }])],
  controllers: [BarController],
  providers: [BarService, BarDAO],
})
export class BarModule {}
