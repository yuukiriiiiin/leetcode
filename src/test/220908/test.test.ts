// TODO
// あなたは階段を登っています。頂上まで行くにはn段の階段が必要です。
// 毎回、1段か2段のどちらかを登ることができます。頂上までの登り方は何通りあるか？

import { climbStairs } from "../../js/220908";

describe('climbStairs', () => {
  test('1段ずつ登る', () => {
    expect(climbStairs(3)).toBe(3)
  });
});
