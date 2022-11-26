import { markCurls, curls, regexList } from "./regex";

function generate(text: string): string {
  text = markCurls(text, curls)
  console.log(regexList)
  return text;
}

export { generate };
