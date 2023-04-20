export default class Page {
    title;
    constructor(title, styles = {}) {
        this.title = title;
        document.head.title = title;
    }
    ;
}
