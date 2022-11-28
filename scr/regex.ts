type curlsList = [string, string][];

function markCurls(text: string, curls: curlsList): string {
  curls.forEach(([right, left]) => {
    text = markCurl(text, right, left);
  });
  return text;
}

function unmarkCurls(text: string, curls: curlsList): string {
  curls.forEach(([right, left]) => {
    text = text.replaceAll(new RegExp(`(\\${left}|\\${right})\\d+\\-`, 'gms'), '$1');
  })
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
  return new RegExp(`\\${left}|\\${right}`, "gms");
}

function pad(regex: string, group?: boolean): string | RegExp {
  const newRegex = regex.replaceAll(' ', '\\s*').replaceAll('_', '\\s+')
  return group ? `(${newRegex})` : new RegExp(newRegex, 'gms')
}

class RegexList {
  variable = pad("[\\w$]+", true);
  any = pad(".*?", true);
  fullDeclarer = pad(`${this.variable} \\=`, true);
  args = pad(`\\((?<num>\\d\\-)${this.any}\\)\\k<num>`, true) as string;
  fullElement = pad(`${this.fullDeclarer}? element_${this.variable} ${this.args}?`);
  use = pad(`use_((${this.variable} \\, )* ${this.variable})`);
}

const regexList = new RegexList;

export { markCurls, unmarkCurls, curls, regexList };
