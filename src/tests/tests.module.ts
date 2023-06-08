import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { OGEMathTestGenerator } from "./math/OGEMathTestGenerator";

@Module({
  controllers: [TestsController],
  providers: [TestsService, OGEMathTestGenerator]
})
export class TestsModule {}
