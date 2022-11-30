use Div, P, Span, h1, h2, h3;

const paragraphElement = element P('A paragraph of text.');

//*
const DivElement = element Div(
    element Div('hello')
);
//*

//:

const SpanElement = element Span(() => 'Hello');


const a = [
    element Span(
        element P('Hello World!')
    ),
    element Div(
        element Span(
            'Hello.'
        )
    )
]


const headings = [
    element h1('this is a heading 1'),
    element h2 ('this is a heading 2'),
    element h3 ('this is a heading 3')
]

const arr = [...a, ...headings, SpanElement, DivElement, paragraphElement];

arr.forEach((a) => {
    append a;
})