import { oge_math_latex_signs, oge_math_signs } from "../helpers/signs";
import { Injectable } from "@nestjs/common";

//TODO: COMPLETE THIS

@Injectable()
export class OGEMathTestGenerator {


  constructor() {
  }


  task6_type1() {
    let num1: number = parseFloat((Math.random() * 10).toPrecision(2));
    let num2: number = parseFloat((Math.random() * 10).toPrecision(2));
    let signBetweenNumbers = oge_math_signs[Math.floor(Math.random() * oge_math_signs.length)];

    //let numerator = `${num1} ${signBetweenNumbers} ${num2}`;
    let num3: number = parseFloat((Math.random() * 10).toPrecision(2));
    let stringEval = `(${num1} ${signBetweenNumbers} ${num2}) / (${num3})`;

    console.log(stringEval);
    const description ="№6 Тип 1 \n Найдите значение выражения";
    let latexEval;
    latexEval = `\\(\\frac{ ${num1} ${oge_math_latex_signs[`${signBetweenNumbers}`]} ${num2}}{${num3}}\\)`;
    return [stringEval, latexEval, description];
  }


  task6_type2() {
    let num: number;
    let upper1: number;
    let upper2: number;
    let upper3: number;
    do {
      num= Math.trunc((Math.random() * 10));
    } while(num===0)
    do {
      upper1= Math.trunc((Math.random() * 5));
    } while(upper1===0)
    do {
      upper2= Math.trunc((Math.random() * 5));
    } while(upper2===0)
    do {
      upper3= Math.trunc((Math.random() * 5));
    } while(upper3===0)

    //let signBetween1_and_2 = oge_math_signs[Math.floor(Math.random() * oge_math_signs.length)];

    const description ="№6 Тип 2 \n Найдите значение выражения";
    let stringEval = `(${num}**${upper1}*${num}**${upper2})/${num}**${upper3}`;
    console.log(stringEval);
    let latexEval = `\\(\\frac{ ${num}^${upper1} ${oge_math_latex_signs[`*`]} ${num}^${upper2} }{${num}^${upper3} }\\)`;


    return [stringEval, latexEval,description];
  }

  task10_type1() {

    let r1;
    let r2;
    let r3;
    do {
      r1= Math.trunc((Math.random() * 10));
    } while(r1===0)
    do {
       r2 = Math.trunc((Math.random() * 10));
    } while(r2===0)
    do {
     r3 = Math.trunc((Math.random() * 10));
    } while(r3===0)





    const dic: Array<[number, string]> = [[r1, "мясом"], [r2, "капустой"], [r3, "вишней"]];
    let ing = dic[Math.floor(Math.random() * dic.length)];
    const description ="№10 Тип 1";
    let latexEval =
      `На тарелке лежат одинаковые на вид пирожки: ${r1} с мясом, ${r2} с капустой и ${r3} с вишней. Петя наугад выбирает один пирожок. Найдите вероятность того, что он окажется с ${ing[1]}.`;
    let rightAnswer = (ing[0] / (r1 + r2 + r3)).toPrecision(2);
    return [latexEval, rightAnswer, description];
  }

  generateEntireTestOGEMath() {


    const task6_t1 = this.task6_type1();
    const task6_t2 = this.task6_type2();


    const task10_t1 = this.task10_type1();


    const task6_t1_right_answer = parseFloat(eval(task6_t1[0])).toPrecision(2);
    const task6_t2_right_answer = parseFloat(eval(task6_t2[0])).toPrecision(2);

    return [
      { rightAnswer: task6_t1_right_answer, latexEval: task6_t1[1], description: task6_t1[2] },
      { rightAnswer: task6_t2_right_answer, latexEval: task6_t2[1], description: task6_t2[2] },
      { latexEval: task10_t1[0], rightAnswer: task10_t1[1], description: task10_t1[2] }
    ];
  }

}
