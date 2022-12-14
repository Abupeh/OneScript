import { markCurls, unmarkCurls, curls, regexList } from "./regex";
import { replace } from './parse'
import runtime from './runtime'


function generate(text: string, finalText = false): string {
  const unmarkedText = unmarkCurls(text, curls);
  const markedText = markCurls(unmarkedText, curls);
  const generatedArgs = markedText.replaceAll(new RegExp(regexList.args, 'gms'), (substring: string, inside: string) => `(0-${generate(inside)})0-`)
  const replacedText = generatedArgs
  .replaceAll(regexList.editoperation, replace.editoperation) //*Edit operation Replace
  .replaceAll(regexList.append, replace.append) //* Append Replace
  .replaceAll(regexList.fullElement, replace.elements) //* Element Replace
  .replaceAll(regexList.use, replace.use) //* Use Replace

  if(finalText) return runtime + unmarkCurls(replacedText, curls)
  return replacedText;
  
}

export { generate };
