// TODO
// 単語とスペースで構成される文字列 s を指定すると、文字列の最後の単語の長さを返します

import { lengthOfLastWord } from "../../js/220906";

describe('単語とスペースで構成される文字列 s が渡された場合', () => {
  test("文字列の最後の単語の長さを返す", () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });
  test("文字列の最後の単語の長さを返す", () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
  });
});
