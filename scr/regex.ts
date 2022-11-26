type curlsList = [string, string][];

function markCurls(text: string, curls: curlsList): string {
  curls.forEach(([right, left]) => {
    text = markCurl(text, right, left);
  });
  return text;
}

function markCurl(text: string, left: string, right: string): string {
  let number = 0;
  let lastCurl = "";
  return text.replaceAll(both(left, right), (currentCurl) => {
    if (left == lastCurl && left == currentCurl) number++;
    if (right == lastCurl && right == currentCurl) number--;
    lastCurl = currentCurl;
    return `${currentCurl}${number}-`;
  });
}

const curls: curlsList = [
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
];

function both(left: string, right: string): RegExp {
  return new RegExp(`\\${left}|\\${right}`, "gm");
}


const RegexList = {
  variable: ["[\\w$]+", true],
  " ": ["\\s*"],
  _: ["\\s+"],
  any: [".*?", true],
  fullDeclarer: ["variable \\="],
  args: ["\\((?<num>\\d)any\\)\\k<num>", true],
  fullElement: ["fullDeclarer"],
}


const regexList: { [key in keyof typeof RegexList ]: RegExp } | { [k: string]: RegExp } = Condense(RegexList);

function Condense<T>(object: object) {
  let list: [string, [string]][] = [['', ['']]];
  const condencedList = Object.entries(object).map(([name, [regex, isGrouped]]) => {
    for (let [key, [value]] of list) {
      regex = regex.replaceAll(key, value);
    }
    if (isGrouped) regex = `(${regex})`;
    const finalProperty: [string, [string]] = [name, [regex]];
    list.push(finalProperty)
    return finalProperty;
  });
  const FinalList: [string, RegExp][] = condencedList.map(([name, [value]]) => [name, new RegExp(value, "gms")])
  return Object.fromEntries(FinalList)
}

export { markCurls, curls, regexList };
