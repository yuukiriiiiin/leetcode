// TODO
// - [ ] '(', ')', '{', '}', '[' , ']' だけを含む文字列を受け取り、セットで含まれているかチェックする

//   - [ ] 奇数だったらNG
//   - [ ] 同じタイプのブラケットで閉じている必要がある
//   - [ ] 正しい順序で閉じている

import { isValid } from "../../js/220607";

describe("", () => {
  test("s = '(' を受け取ったら false", () => {
    expect(isValid("(")).toBe(false);
  });
  test("s = '()[]{}' を受け取ったら true", () => {
    expect(isValid("()[]{}")).toBe(true);
  });
  test("s = '(]' を受け取ったら false", () => {
    expect(isValid("(]")).toBe(false);
  });
  test("s = '()[)' を受け取ったら false", () => {
    expect(isValid("()[)")).toBe(false);
  });
  test("s = '()[))' を受け取ったら false", () => {
    expect(isValid("()[))")).toBe(false);
  });
  test("s = '({})' を受け取ったら true", () => {
    expect(isValid("({})")).toBe(true);
  });
  test("s = '((' を受け取ったら false", () => {
    expect(isValid("((")).toBe(false);
  });
  test("s = '){' を受け取ったら false", () => {
    expect(isValid("){")).toBe(false);
  });
});
