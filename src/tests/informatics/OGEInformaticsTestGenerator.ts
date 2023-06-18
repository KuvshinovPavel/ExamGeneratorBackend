import { Injectable } from "@nestjs/common";
import { oge_inf_signs, programOutputs } from "../helpers/signs";

@Injectable()
export class OGEInformaticsTestGenerator {
  constructor() {

  }

  task6_type1() {
    let sCond;
    let tCond;
    let times;

    do {
      sCond = Math.trunc((Math.random() * 5));
    } while (sCond === 0);
    do {
      tCond = Math.trunc((Math.random() * 5));
    } while (tCond === 0);
    do {
      times = Math.trunc((Math.random() * 8));
    } while (times < 5 || times > 10);

    const sign1: string = oge_inf_signs[Math.floor(Math.random() * oge_inf_signs.length)];
    const sign2 = oge_inf_signs[Math.floor(Math.random() * oge_inf_signs.length)];
    const programOutput = programOutputs[Math.floor(Math.random() * programOutputs.length)];

    const gra = this.giveRightAnswer(sCond, tCond, sign1, sign2, times, programOutput);
    const rightAnswer = gra[0];
    const numPairs = gra[1];

    let basicCode = `DIM s, t AS INTEGER
  INPUT s
  INPUT t
  IF s ${sign1} ${sCond} or t ${sign2} ${tCond} THEN
     PRINT ‘YES’
  ELSE
     PRINT ‘NO’
  ENDIF`;

    let pythonCode = `s = int(input())
  t = int(input())
  if s ${sign1} ${sCond} or  t ${sign2} ${tCond}:
      print("YES")
  else:
      print("NO")`;

    let pascalCode = `
var s, t: integer;
begin
    readln(s);
    readln(t);
    if (s ${sign1} ${sCond}) or ( t ${sign2} ${tCond})
        then writeln('YES')
        else writeln('NO')
end.
`;


    let cppCode = `#include <iostream>
using namespace std;
int main() {
    int s, t;
    cin >> s;
    cin >> t;
    if (s ${sign1} ${sCond} || t ${sign2} ${tCond})
        cout << "YES";
    else
        cout << "NO";
return 0;
}
`;

    const description = `Было проведено ${times} запусков программы, при которых в качестве значений переменных s и t вводились следующие пары чисел:
    ${numPairs}.
  Сколько было запусков, при которых программа напечатала «${programOutput}»?`;

    return [cppCode, pascalCode, basicCode, pythonCode, rightAnswer, description];

  }

  private giveRightAnswer(sCond, tCond, sign1: string, sign2: string, times, programOutput: string) {
    let t;
    let s;
    let ifCond;
    let ifCond1;
    let ifCond2;
    let NoCount: number = 0;
    let YesCount: number = 0;
    let numPairs: string = "";
    let rightAnswer: number = 0;

    for (let i = 0; i < times; i++) {
      do {
        s = Math.trunc((Math.random() * 10));
      } while (s === 0);
      do {
        t = Math.trunc((Math.random() * 10));
      } while (t === 0);
      numPairs += `(${s}, ${t});`;
      ifCond1 = eval(`${s} ${sign1} ${sCond}`);
      ifCond2 = eval(`${s} ${sign2} ${tCond}`);
      ifCond = eval(`(ifCond1) || (ifCond2)`);
      if (ifCond) {
        YesCount++;
      } else {
        NoCount++;
      }
    }

    if (programOutput === "NO") {
      rightAnswer = NoCount;
    } else if (programOutput === "YES") {
      rightAnswer = YesCount;
    }
    return [rightAnswer, numPairs];

  }


  generateEntireTestOGEInf() {

    const task6_t1 = this.task6_type1();
    let cppCode = task6_t1[0];
    let pascalCode = task6_t1[1];
    let basicCode = task6_t1[2];
    let pythonCode = task6_t1[3];
    let rightAnswer = task6_t1[4];
    let description = task6_t1[5];


    return {cppCode, pascalCode, basicCode, pythonCode, rightAnswer, description};
  }
}
