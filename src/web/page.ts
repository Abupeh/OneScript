type CSSStyles = Partial<CSSStyleDeclaration>

export default class Page {
    constructor(public title: string, styles: CSSStyles = {}) {
        document.head.title = title;
    };
}