import { generate } from "./generate"

const use = [''];
const elementFunction = ((name: string, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))()
     try {
        element.appendChild(innerHTML);
     } catch {
        try {
            element.innerHTML = eval(innerHTML);
        } catch {
            element.innerHTML = innerHTML;
        }
     }
    return element;
}).toString();

export namespace replace {
    export function elements(substring, fullDeclarer, variableName: string | undefined, elementName, fullArgs, num, args, ...rest): string {
        const generatedArgs: string = generate(args);

        const declaration: string = variableName ? fullDeclarer : '';
        return `${declaration} (${elementFunction}) ('${elementName}', ${generatedArgs})`;
    }
    export function use(substring, elements) {
        const elementsAsString = elements.split(',').map((v) => `'${v.trim()}'`);
        return `use.push(...[${elementsAsString}])`
    }
}
