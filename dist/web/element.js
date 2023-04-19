import { Level } from "./web.js";
export class Base {
    id = "";
    level = Level.Inline;
    tags = [];
    style = {};
    event = [];
    constructor({}) { }
    editStyle(styles) {
        Object.assign(this.style, styles);
    }
}
export class Tag extends Array {
    replace(base, value) {
        const index = this.indexOf(base);
        return index == -1 ? ((this[index] = value), true) : false;
    }
}
export class Container extends Base {
    id;
    children;
    constructor(id, children = new Tag) {
        super({ id });
        this.id = id;
        this.children = children;
    }
}
export class Dataset extends Container {
}
export class Text extends Base {
}
export class Interactor extends Base {
}
export class Asset extends Base {
}
