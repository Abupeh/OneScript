import { generate } from "./generate"

const use = [''];
const elementFunction = ((name, args) => {
    if(!use.includes(name)) return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args)
    } catch {
        element.appendChild(document.createTextNode(args))
    }
    return element;
}).toString();

export namespace replace {
    export function elements(substring, fullDeclarer, variableName: string | undefined, elementName, fullArgs, num, args, ...rest): string {
        const generatedArgs: string = generate(args || '""');
        const declaration: string = variableName ? fullDeclarer : '';
        return `${declaration} (${elementFunction})('${elementName}', ${generatedArgs})`;
    }
    export function use(substring, elements) {
        const elementsAsString = elements.split(',').map((v) => `'${v.trim()}'`);
        return `use.push(...[${elementsAsString}])`
    }
}
