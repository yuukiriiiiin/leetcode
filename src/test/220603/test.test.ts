// TODO
// - [ ] 文字列の配列の中から最も長い共通のプレフィックス文字列を見つける関数
//   - [ ] 共通のプレフィックスがあればその文字列を返す
//   - [ ] 共通のプレフィックスがなければ空文字を返す

import { longestCommonPrefix } from "../../js/220603";

describe("文字列の配列の中から最も長い共通のプレフィックス文字列を見つける関数", () => {
  test("文字列の配列 ['flower','flow','flight'] が与えられたら、返却される文字列は 'fl'", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });
  test("文字列の配列 ['dog','racecar','car'] が与えられたら、返却される文字列は ''", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });
});
