import { generate } from "./generate"


export namespace replace {
    export function elements(substring, fullDeclarer, variableName: string | undefined, elementName, fullArgs, num, args): string {
        const generatedArgs: string = generate(args);
        const declaration: string = variableName ? fullDeclarer : '';
        return `
        ${declaration} ((name, innerHTML) => {
            const element = (() => {
                if(Data.includes(name)) return document.createElement(name);
                return new (eval(name)); 
            })();
             if(typeof innerHTML == "string") element.innerHTML = innerHTML;
             else element.append(innerHTML);
            element.innerHTML = innerHTML
            return element;
        })('${elementName}', ${generatedArgs})
        `
    }
}
