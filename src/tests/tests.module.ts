import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { OGEMathTestGenerator } from "./math/OGEMathTestGenerator";
import { OGEInformaticsTestGenerator } from "./informatics/OGEInformaticsTestGenerator";

@Module({
  controllers: [TestsController],
  providers: [TestsService, OGEMathTestGenerator, OGEInformaticsTestGenerator]
})
export class TestsModule {}
