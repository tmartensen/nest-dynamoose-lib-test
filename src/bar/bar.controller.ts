import { Body, Controller, Post } from "@nestjs/common";
import { Bar } from 'dynamoose-schema-lib';
import { BarService } from './bar.service';

@Controller('bar')
export class BarController {
  constructor(private barService: BarService) {}

  @Post()
  create(@Body() bar: Bar): Promise<Bar> {
    return this.barService.create(bar);
  }
}
