import { generate } from "./generate"

export namespace replace {
    export function elements(substring, fullDeclarer = '', variableName: string | undefined, elementName, fullArgs, num, args, ...rest): string {
        const generatedArgs = generate(args || '""');
        return `${fullDeclarer} element('${elementName}', ${generatedArgs})`;
    }
    export function use(substring, elements) {
        const elementsAsString = elements.split(',').map((v) => `'${v.trim()}'`);
        return `use.push(${elementsAsString})`
    }
}
