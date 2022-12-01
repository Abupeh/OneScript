const use = [];function element(name, ...args) {
    if (!use.includes(name))
        return new (eval(name))(...args);
    const element = document.createElement(name);
    args.forEach(a => {
        element.appendChild(a instanceof Node ? a : document.createTextNode(a));
    });
    return element;
};
// <div class="calculator__keys">
//   <button class="key--operator" data-action="add">+</button>
//   <button class="key--operator" data-action="subtract">-</button
//   <button class="key--operator" data-action="multiply">&times;</button>
//   <button class="key--operator" data-action="divide">÷</button
//   <button>7</button>
//   <button>8</button>
//   <button>9</button>
//   <button>4</button>
//   <button>5</button>
//   <button>6</button>
//   <button>1</button>
//   <button>2</button>
//   <button>3</button>
//   <button>0</button>
//   <button data-action="decimal">.</button>
//   <button data-action="clear">AC</button>
//   <button class="key--equal" data-action="calculate">=</button>
// </div>


use.push('Div','Button');

const div = element('Div', 
Object.assign( element('Button', '+') , {
        class: 'key_operator',
        data_action: "add"
    }),
Object.assign( element('Button', '-') , {
        class: 'key_operator',
        data_action: "subtract"
    }),
Object.assign( element('Button', '&times;') , {
        class: 'key_operator',
        data_action: "multiply"
    }),
Object.assign( element('Button', '÷') , {
        class: 'key_operator',
        data_action: "diving"
    }), element('Button', '7'), element('Button', '8'), element('Button', '9'), element('Button', '4'), element('Button', '5'), element('Button', '6'), element('Button', '1'), element('Button', '2'), element('Button', '3'), element('Button', '0'),
Object.assign( element('Button', '.') , {
        data_action: 'decimal'
    }),
Object.assign( element('Button', 'AC') , {
        data_action: 'clear'
    }),
Object.assign( element('Button', '=') , {
        class: 'key--equal',
        data_action: 'calculate'
    })
)

document.body.appendChild(div);