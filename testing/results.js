const use = [];use.push(...['Div','P','Span'])

const paragraphElement = ((name, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))();
    try {
        element.appendChild(innerHTML);
    }
    catch {
        try {
            element.innerHTML = eval(innerHTML);
        }
        catch {
            element.innerHTML = innerHTML;
        }
    }
    return element;
}) ('P', 'A paragraph of text.');

//*
const DivElement = ((name, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))();
    try {
        element.appendChild(innerHTML);
    }
    catch {
        try {
            element.innerHTML = eval(innerHTML);
        }
        catch {
            element.innerHTML = innerHTML;
        }
    }
    return element;
}) ('Div',  ((name, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))();
    try {
        element.appendChild(innerHTML);
    }
    catch {
        try {
            element.innerHTML = eval(innerHTML);
        }
        catch {
            element.innerHTML = innerHTML;
        }
    }
    return element;
}) ('Div', 'hello')
);
//*

//:

const SpanElement = ((name, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))();
    try {
        element.appendChild(innerHTML);
    }
    catch {
        try {
            element.innerHTML = eval(innerHTML);
        }
        catch {
            element.innerHTML = innerHTML;
        }
    }
    return element;
}) ('Span', () => 'Hello');


const a = [ ((name, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))();
    try {
        element.appendChild(innerHTML);
    }
    catch {
        try {
            element.innerHTML = eval(innerHTML);
        }
        catch {
            element.innerHTML = innerHTML;
        }
    }
    return element;
}) ('Span',  ((name, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))();
    try {
        element.appendChild(innerHTML);
    }
    catch {
        try {
            element.innerHTML = eval(innerHTML);
        }
        catch {
            element.innerHTML = innerHTML;
        }
    }
    return element;
}) ('P', 'Hello World!')
    ), ((name, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))();
    try {
        element.appendChild(innerHTML);
    }
    catch {
        try {
            element.innerHTML = eval(innerHTML);
        }
        catch {
            element.innerHTML = innerHTML;
        }
    }
    return element;
}) ('Div',  ((name, innerHTML) => {
    const element = use.includes(name) ? document.createElement(name) : new (eval(name))();
    try {
        element.appendChild(innerHTML);
    }
    catch {
        try {
            element.innerHTML = eval(innerHTML);
        }
        catch {
            element.innerHTML = innerHTML;
        }
    }
    return element;
}) ('Span', 
            'Hello.'
        )
    )
]