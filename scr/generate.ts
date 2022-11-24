import { curlRegex } from "./regex"
function generate(text: string): string {
    text.replaceAll(curlRegex('{', '}'), (...all): string => {
        return '';
    })
    return '';
}

export { generate };