import { assert } from "console";
import { twoSum } from "../../js/220531";

// TODO
// [] 整数の配列（nums）と整数ターゲットを引数として受け取り、合計が整数ターゲットになる、整数の配列の中の2つの数値のインデックスを返す。

// 謎
// toEqualだと、[2, 4, 5] === [2, 4, 5, undefined, undefined] とかでも通るのなんで

describe("整数の配列（nums）と整数ターゲットを引数として受け取り、合計が整数ターゲットになる、整数の配列の中の2つの数値のインデックスを返す", () => {
  test("nums = [2,7,11,15], target = 9 の時、[0,1] を返す", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("nums = [3,2,4], target = 6 の時、[1,2] を返す", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  test("nums = [3,3], target = 6 の時、[0,1] を返す", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
  test("nums = [-7,1,2], target = -6 の時、[0,1] を返す", () => {
    expect(twoSum([-7, 1, 2], -6)).toEqual([0, 1]);
  });
  // 要らなかった
  // test("受け取った整数の配列の中から、ターゲットより大きい数字を排除した新たな配列を返す", () => {
  //   expect(selectNum([2, 7, 11, 15], 9)).toEqual([2, 7]);
  // });
});
