import { generate } from "./generate"

export namespace replace {
    export function elements(substring: string, fullDeclarer = '', variableName: string | undefined, elementName: string, fullArgs: string, num: string, args: string): string {
        const generatedArgs = generate(args || '""');
        return `${fullDeclarer} element('${elementName}', ${generatedArgs})`;
    }
    export function use(substring: string, elements: string) {
        const elementsAsString = elements.split(',').map((v) => `'${v.trim()}'`);
        return `use.push(${elementsAsString})`
    }
    export function append(substring: string, inner: string): string {
        const generatedInner = generate(inner);
        return `document.body.appendChild(${generatedInner})`
    }
}
