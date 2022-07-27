export const isValid = (s: string) => {
  // 文字数が奇数だったら false
  if (s.length % 2 !== 0) return false;
  const arr = s.match(/.{2}/g) as string[];

  const result = [];

  // 文字列を半分に分割する
  const prev = s.slice(0, s.length / 2);
  const cur = s.slice(s.length / 2, s.length);

  // 2番目のグループを、それぞれ対応するカッコに戻す
  const reversed = [...cur].reduceRight((p, c) => {
    if (c === ")") {
      c = "(";
    } else if (c === "]") {
      c = "[";
    } else if (c === "}") {
      c = "{";
    } else {
      c = "not equal";
    }
    return p + c;
  }, "");

  // 1番目と2番目のグループが一致していたら、
  if (prev === reversed) {
    return true;
  }

  // もし一致してなかったら、グループを2つずつに分割して、比べる作業
  // 繰り返す

  for (const item of arr) {
    if (item[0] === "(") {
      result.push(item[1] === ")");
    }
    if (item[0] === "[") {
      result.push(item[1] === "]");
    }
    if (item[0] === "{") {
      result.push(item[1] === "}");
    }
  }

  return result.every((r) => r === true);
};
