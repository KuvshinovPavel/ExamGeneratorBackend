import { Controller, Get } from "@nestjs/common";
import { OGEMathTestGenerator } from "./math/OGEMathTestGenerator";
import { OGEInformaticsTestGenerator } from "./informatics/OGEInformaticsTestGenerator";

@Controller("tests")
export class TestsController {
  constructor(private ogeMathService: OGEMathTestGenerator,
              private ogeInfService: OGEInformaticsTestGenerator) {
  }

  @Get('oge_math')
  generateTestOGEMath() {
   // const [stringEval, latexEval] = this.ogeMathService.task6_type1();
    //const rightAnswer = parseFloat(eval(stringEval)).toPrecision(3);
    return this.ogeMathService.generateEntireTestOGEMath();
  }
  @Get('oge_inf')
  generateTestOGEInf() {
   // const [stringEval, latexEval] = this.ogeMathService.task6_type1();
    //const rightAnswer = parseFloat(eval(stringEval)).toPrecision(3);
    return this.ogeInfService.generateEntireTestOGEInf();
  }
}
