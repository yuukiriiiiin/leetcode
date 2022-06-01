// TODO
// - [ ] 整数xが与えられた場合、xが回文整数の場合はtrueを、そうでない場合はfalseを返す。
//   - [ ] 一番最初と一番最後の数字を比較して、同じなら次に進む
//   - [ ] 2番目と最後から2番目のの数字を比較して、同じなら次に進む
//   - [ ] これを繰り返す
//   - [ ] マイナスの時には必ずfalseになる

import { isPalindrome } from "../../js/220601";

describe("整数xが与えられた場合、xが回文整数の場合はtrueを、そうでない場合はfalseを返す", () => {
  test("x = 121 がの場合、true を返す", () => {
    expect(isPalindrome(121)).toBe(true);
  });
  test("x = 911101129 がの場合、false を返す", () => {
    expect(isPalindrome(911101119)).toBe(true);
  });
  test("x = 3439343 がの場合、true を返す", () => {
    expect(isPalindrome(3439343)).toBe(true);
  });
  test("x = -121 がの場合、false を返す", () => {
    expect(isPalindrome(-121)).toBe(false);
  });
  test("x = 10 がの場合、false を返す", () => {
    expect(isPalindrome(10)).toBe(false);
  });
  test("x = 0 がの場合、true を返す", () => {
    expect(isPalindrome(0)).toBe(true);
  });
});
