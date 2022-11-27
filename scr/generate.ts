import { markCurls, curls, regexList } from "./regex";
import { replace } from './parse'

function generate(text: string): string {
  const markedText = markCurls(text, curls)
  const elementReplacedText = markedText.replaceAll(regexList.fullElement, replace.elements);
  return elementReplacedText;
}

export { generate };
