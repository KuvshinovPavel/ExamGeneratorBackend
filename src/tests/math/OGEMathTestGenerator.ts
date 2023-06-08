import { latex_signs, signs } from "../helpers/signs";
import { Injectable } from "@nestjs/common";
//TODO: COMPLETE THIS

@Injectable()
export class OGEMathTestGenerator {


  constructor() {
  }


  task6_type1() {
    let num1:number = parseFloat((Math.random() * 10).toPrecision(2));
    let num2:number = parseFloat((Math.random() * 10).toPrecision(2));
    let signBetweenNumbers = signs[Math.floor(Math.random() * signs.length)];
    let numerator = `${num1} ${signBetweenNumbers} ${num2}`;

    let num3:number = parseFloat((Math.random() * 10).toPrecision(2));
    // num4 = parseFloat(String(Math.random() * 10)).toPrecision(2);
    // let signBetween3_and_4 = signs[Math.floor(Math.random() * signs.length)];
    // let denominator

    let stringEval = `(${num1} ${signBetweenNumbers} ${num2}) / (${num3})`;
    console.log(stringEval);

    // let lSign = `${latex_signs["${}"]}`;
    let latexEval;

      latexEval = `\\(\\frac{ ${num1} ${latex_signs[`${signBetweenNumbers}`]} ${num2}}{${num3}}\\)`;

    // else {
    //   latexEval = `\frac{ ${num1} \\${latex_signs[`${signBetweenNumbers}`]} ${num2}}{${num3}}`;
    // }
    return [stringEval, latexEval];
  }


   task6_type2() {
    let num1:number = parseFloat((Math.random() * 10).toPrecision(2));
    let num2:number = parseFloat((Math.random() * 10).toPrecision(2));
    let signBetween1_and_2 = signs[Math.floor(Math.random() * signs.length)]
    let num3 = parseFloat((Math.random() * 10).toPrecision(2));

    let stringEval = `(${num1} ${signBetween1_and_2} ${num2}) * (${num3})`
    console.log(stringEval);
    let latexEval;
    if (signBetween1_and_2 === '-' || signBetween1_and_2 === '+') {
      latexEval = `\\((${num1} ${signBetween1_and_2} ${num2}) \cdot ${num3}\\)`
    } else {
      latexEval = `\\((${num1} \\${signBetween1_and_2} ${num2}) \cdot ${num3}\\)`
    }
    return [stringEval, latexEval];
  }


}
