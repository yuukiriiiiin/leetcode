
import { merge } from "../../js/220926";

describe("", () => {
  test("", () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
  });
  test("", () => {
    expect(merge([1], 1, [], 0)).toEqual([1]);
  });
  test("", () => {
    expect(merge([0], 0, [1], 1)).toEqual([1]);
  });
  test("", () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
