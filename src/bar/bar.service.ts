import { Injectable } from '@nestjs/common';
import { Bar, BarDAO } from "dynamoose-schema-lib";

@Injectable()
export class BarService {
  constructor(private barDao: BarDAO) {}

  create(bar: Bar): Promise<Bar> {
    return this.barDao.create(bar);
  }
}
