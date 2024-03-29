// TODO
// 整数配列 digits として表される大きな整数が与えられます。ここで、各 digits[i] は整数の i 桁目です。桁は、左から右の順序で最上位から最下位に並べられます。長整数には、先頭の 0 は含まれません。

import { plusOne } from "../../js/220907";

describe('', () => {
  test("文字列の最後の単語の長さを返す", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });
  test("桁数が繰り上がる", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });
  test("最初の0は含めない", () => {
    expect(plusOne([0, 9])).toEqual([1, 0]);
  });
  test("", () => {
    expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toEqual(
      [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });
});
