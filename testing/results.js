const use = [];use.push(...['Div','P','Span'])

const paragraphElement = ((name, args) => {
    if (!use.includes(name))
        return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args);
    }
    catch {
        element.appendChild(document.createTextNode(args));
    }
    return element;
})('P', 'A paragraph of text.');

//*
const DivElement = ((name, args) => {
    if (!use.includes(name))
        return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args);
    }
    catch {
        element.appendChild(document.createTextNode(args));
    }
    return element;
})('Div',  ((name, args) => {
    if (!use.includes(name))
        return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args);
    }
    catch {
        element.appendChild(document.createTextNode(args));
    }
    return element;
})('Div', 'hello')
);
//*

//:

const SpanElement = ((name, args) => {
    if (!use.includes(name))
        return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args);
    }
    catch {
        element.appendChild(document.createTextNode(args));
    }
    return element;
})('Span', () => 'Hello');


const a = [ ((name, args) => {
    if (!use.includes(name))
        return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args);
    }
    catch {
        element.appendChild(document.createTextNode(args));
    }
    return element;
})('Span',  ((name, args) => {
    if (!use.includes(name))
        return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args);
    }
    catch {
        element.appendChild(document.createTextNode(args));
    }
    return element;
})('P', 'Hello World!')
    ), ((name, args) => {
    if (!use.includes(name))
        return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args);
    }
    catch {
        element.appendChild(document.createTextNode(args));
    }
    return element;
})('Div',  ((name, args) => {
    if (!use.includes(name))
        return new (eval(name))(args);
    const element = document.createElement(name);
    try {
        element.appendChild(args);
    }
    catch {
        element.appendChild(document.createTextNode(args));
    }
    return element;
})('Span', 
            'Hello.'
        )
    )
]
