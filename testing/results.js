const use = [];function element(name, ...args) {
    if (!use.includes(name))
        return new (eval(name))(...args);
    const element = document.createElement(name);
    args.forEach(a => {
        element.appendChild(a instanceof Node ? a : document.createTextNode(a));
    });
    return element;
};use.push('Div','P','Span')

const paragraphElement = element('P', 'A paragraph of text.');

//*
const DivElement = element('Div',  element('Div', 'hello')
);
//*

//:

const SpanElement = element('Span', () => 'Hello');


const a = [ element('Span',  element('P', 'Hello World!')
    ), element('Div',  element('Span', 
            'Hello.'
        )
    )
]
