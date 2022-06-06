// TODO
// - [ ] リンクリストを受け取り、マージ＆ソートする
//   - [ ] 2つのリストを1つのリストにマージする
//   - [ ] 昇順に並び替える
//     - [ ] list1 = [1,2,4], list2 = [1,3,4] を受け取って [1,1,2,3,4,4] を返す
//     - [ ] list1 = [], list2 = [] を受け取って [] を返す
//     - [ ] list1 = [], list2 = [0] を受け取って [0] を返す

import { mergeTwoLists } from "../../js/220604";

describe("", () => {
  test("list1 = [1,2,4], list2 = [1,3,4] を受け取って [1,1,2,3,4,4] を返す", () => {
    expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
  });
  test("list1 = [], list2 = [] を受け取って [] を返す", () => {
    expect(mergeTwoLists([], [])).toEqual([]);
  });
  test("list1 = [], list2 = [0] を受け取って [0] を返す", () => {
    expect(mergeTwoLists([], [0])).toEqual([0]);
  });
});
