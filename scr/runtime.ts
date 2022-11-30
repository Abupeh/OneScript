const use = ['']

const useFunction = 'const use = [];'
const elementFunction = (function element(name: string, ...args: any[]) {
    if(!use.includes(name)) return new (eval(name))(...args);
    
    const element = document.createElement(name);
    args.forEach(a => {
        element.appendChild(a instanceof Node ? a : document.createTextNode(a));
    });
    return element;
}).toString();

export default useFunction + elementFunction + ';'