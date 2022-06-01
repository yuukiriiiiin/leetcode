// TODO
// - [ ]
//   - [ ] 2はローマ数字でII
//   - [ ] 10はローマ数字でX
//   - [ ] 12はローマ数字でXII
//   - [ ] 27はXXVII
//   - [ ] 例外：4番目の数字はIV
//   - [ ] 例外：9番目の数字はIX

import { romanToInt } from "../../js/220602";

describe("任意のローマ数字が与えられたら、それを整数に変換する", () => {
  test("ローマ字 III が与えられたら、返却される整数は 3", () => {
    expect(romanToInt("III")).toBe(3);
  });
  test("ローマ字 LVIII が与えられたら、返却される整数は 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });
  test("ローマ字 MCMXCIV が与えられたら、返却される整数は 1994", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
