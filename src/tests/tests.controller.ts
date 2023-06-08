import { Controller, Get } from "@nestjs/common";
import { OGEMathTestGenerator } from "./math/OGEMathTestGenerator";

@Controller("tests")
export class TestsController {
  constructor(private ogeMathService: OGEMathTestGenerator) {
  }

  @Get()
  generateTest() {
    const [stringEval, latexEval] = this.ogeMathService.task6_type1();
    const rightAnswer = parseFloat(eval(stringEval)).toPrecision(3);
    return [{ rightAnswer, latexEval }];
  }
}
