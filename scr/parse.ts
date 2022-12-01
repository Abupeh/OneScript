import { generate } from "./generate"

export namespace replace {
    export function elements(substring: string, fullDeclarer = '', variableName: string | undefined, elementName: string, args: string = '""'): string {
        return `${fullDeclarer} element('${elementName}', ${args})`;
    }
    export function use(substring: string, elements: string) {
        const elementsAsString = elements.split(',').map((v) => `'${v.trim()}'`);
        return `use.push(${elementsAsString})`
    }
    export function append(substring: string, inner: string): string {
        const generatedInner = generate(inner);
        return `document.body.appendChild(${generatedInner})`
    }
    export function editoperation(substring: string, ...args: string[]): string {
        const firstObject = args[0];
        const secondObject = args[4];
        return `Object.assign(${firstObject}, ${secondObject})`;
    }
}
